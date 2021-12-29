# APMC Desktop

## Dhada Book Diagrame

![Font](/images/diagram/dhada-book.png "Week View" =800x600)

## Finalisation Queries

```sql
SET @co_id = 1, @start_date = '2020-04-01', @end_date = '2021-03-31' ;

-- FINDING MISSING FARMER
SELECT * FROM patti WHERE farmer_id NOT IN
(SELECT farmer_id FROM farmer WHERE co_id = @co_id ) AND co_id = @co_id ;

-- FINDING MISSING AGENT
SELECT * FROM patti WHERE agent_id NOT IN
(SELECT agent_id FROM agent WHERE co_id = @co_id ) AND co_id = @co_id ;

-- FINDING MISSING TRANSPORTER
SELECT * FROM patti WHERE transporter_id NOT IN
(SELECT transporter_id FROM transporter WHERE co_id = @co_id ) AND co_id = @co_id ;

-- FINDING MISSING CUSTOMER
SELECT * FROM sales_bill WHERE customer_id NOT IN
(SELECT customer_id FROM customer WHERE co_id = @co_id ) AND co_id = @co_id ;

-- NOT WITHIN DATE RANGE
SELECT * FROM ord_memo WHERE co_id = @co_id AND (doc_dt <= @start_date OR doc_dt >= @end_date) ;
SELECT * FROM patti WHERE co_id = @co_id AND (doc_dt <= @start_date OR doc_dt >= @end_date) ;
SELECT * FROM sales_dtl WHERE co_id = @co_id AND (doc_dt <= @start_date OR doc_dt >= @end_date) ;
SELECT * FROM sales_bill WHERE co_id = @co_id AND (doc_dt <= @start_date OR doc_dt >= @end_date) ;

-- ORPHAN MEMO (patti was not prepared for the memo)
SELECT a.co_id, a.reg, a.memo, a.doc_dt, a.farmer_id, bb.farmer_id
FROM patti a RIGHT JOIN (SELECT a.co_id, a.reg, a.memo, a.doc_dt, b.farmer_id FROM ord_memo a
join (select co_id, reg, memo, farmer_id from pur_dtl group by co_id, reg, memo, farmer_id) as b
ON (a.co_id = b.co_id AND a.reg = b.reg ANd a.memo = b.memo ) ) as bb
ON (a.co_id = bb.co_id AND a.reg = bb.reg AND a.memo = bb.memo AND a.farmer_id = bb.farmer_id )
WHERE bb.co_id = @co_id and a.co_id is null;

-- ORPHAN PATTI (patti present but no records in ord_memo & patti record deleted)
SELECT a.co_id, a.reg, a.memo, a.doc_dt, a.farmer_id, bb.farmer_id
FROM patti a LEFT JOIN (SELECT a.co_id, a.reg, a.memo, a.doc_dt, b.farmer_id FROM ord_memo a
join (select co_id, reg, memo, farmer_id from pur_dtl group by co_id, reg, memo, farmer_id) as b
ON (a.co_id = b.co_id AND a.reg = b.reg ANd a.memo = b.memo ) ) as bb
ON (a.co_id = bb.co_id AND a.reg = bb.reg AND a.memo = bb.memo AND a.farmer_id = bb.farmer_id )
WHERE a.co_id = @co_id and bb.co_id is null;

-- REFUND & Hondekari APPLICABLE TO ONLY AGENT
SELECT co_id, reg, memo, doc_dt, agent, refund FROM ord_memo WHERE co_id = @co_id AND agent_id <= 1 AND refund > 0 ;
SELECT co_id, reg, memo, doc_dt, agent, hondekari FROM patti WHERE co_id = @co_id AND agent_id <= 1 AND hondekari > 0 ;

-- BILL NOT PREPARED
SELECT a.co_id, a.doc_dt, a.customer_id, b.customer_id
FROM sales_dtl a LEFT JOIN sales_bill b
ON (a.co_id = b.co_id AND a.doc_dt = b.doc_dt AND a.customer_id = b.customer_id)
WHERE a.co_id = @co_id AND b.customer_id IS NULL
GROUP BY a.co_id, a.doc_dt, a.customer_id ;

-- DELETED BILL
SELECT a.co_id, a.doc_dt, a.customer_id, b.customer_id
FROM sales_dtl a RIGHT JOIN sales_bill b
ON (a.co_id = b.co_id AND a.doc_dt = b.doc_dt AND a.customer_id = b.customer_id)
WHERE b.co_id = @co_id AND a.customer_id IS NULL
GROUP BY a.co_id, a.doc_dt, a.customer_id ;

-- Patti
SELECT agent_id, farmer_id, transporter_id, doc_dt, bag, caret,
adat, hamali, tapal, motor_bhade, bundle, advance, tolai, barden, hondekari,
etar, varai, levhi, Stax, caret_exp, local_tax, store_tax, insurance_tax,
inam_tax, vat_tax, cgst, igst, sgst, rnd_amt,
other1, other2, other3, other4, discount, tot_exp, net_amt, gross_amt
FROM patti  where co_id = @co_id and doc_dt BETWEEN @start_date AND @end_date ;

-- All Taxes
SELECT sum(adat), sum(hamali), sum(tapal), sum(motor_bhade), sum(bundle), sum(advance), sum(tolai), sum(barden), sum(hondekari),
sum(etar), sum(varai), sum(levhi), sum(Stax), sum(caret_exp), sum(local_tax), sum(store_tax), sum(insurance_tax),
sum(inam_tax), sum(vat_tax), sum(cgst), sum(igst), sum(sgst), sum(rnd_amt),
sum(other1), sum(other2), sum(other3), sum(other4), sum(discount), sum(tot_exp), sum(net_amt), sum(gross_amt)
FROM patti where co_id = @co_id and doc_dt BETWEEN @start_date AND @end_date ;

-- Sales Bill
SELECT co_id, ord_no, bill_no, sum_id, challan_no, doc_dt, reg, customer_id, bag, sales,
sales_tax, commission, motor, hamali, packing, etar, levhi, vat_tax,
cgst, igst, sgst, rnd_amt, other1, other2, other3, other4,
sales, tot_exp, bill_amt
FROM sales_bill where co_id = @co_id and doc_dt BETWEEN @start_date AND @end_date;

-- Sales Bill All Taxes
SELECT sum(sales_tax), sum(commission), sum(motor), sum(hamali), sum(packing), sum(etar), sum(levhi), sum(vat_tax),
sum(cgst), sum(igst), sum(sgst), sum(rnd_amt),
sum(ifnull(other1,0)), sum(ifnull(other2,0)), sum(ifnull(other3,0)), sum(ifnull(other4,0)),
sum(sales) as gross_sales, sum(tot_exp), sum(bill_amt),
sum(sales) + sum(tot_exp) - sum(bill_amt) as bill_amt_diff,
sum(if(customer_id = 1 , bill_amt, 0)) + sum(if(customer_id > 1 , bill_amt, 0)) as customer_bill_amt,
sum(bill_amt) - (sum(if(customer_id = 1 , bill_amt, 0)) + sum(if(customer_id > 1 , bill_amt, 0))) as customer_bill_d,
sum(if(customer_id = 1 , bill_amt, 0)) as cash_customer,  sum(if(customer_id > 1 , bill_amt, 0)) as credit_customer,
(sum(sales) + sum(tot_exp)) - sum(bill_amt) as diffrence,
sum(tot_exp) - (sum(sales_tax) +sum(commission) +sum(motor) +sum(hamali) +sum(packing) + sum(etar) + sum(levhi) + sum(vat_tax) +
sum(cgst) + sum(igst) + sum(sgst) + sum(rnd_amt) +
sum(ifnull(other1,0)) + sum(ifnull(other2,0)) + sum(ifnull(other3,0)) + sum(ifnull(other4,0)))  as tax_diffrence
FROM sales_bill where co_id = @co_id and doc_dt BETWEEN @start_date AND @end_date;

-- Sales Amount Difference
select a.co_id, a.ord_no, a.doc_dt, a.customer_id, a.sales, b.sales, a.sales - b.sales as diff
from sales_bill a JOIN (select co_id, doc_dt, customer_id, sum(amount)as sales from sales_dtl group by co_id, doc_dt, customer_id) as b
ON (a.co_id = b.co_id and a.doc_dt = b.doc_dt aND a.customer_id = b.customer_id)
where a.co_id = 1 having diff = 0.00
```
