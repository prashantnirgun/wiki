# Retail Desktop

| Description               |
| ------------------------- |
| [report_nvc](#report_nvc) |
| [Add Report](#Add-Report) |

| Stored Procedure Name     | Type            | Description                               |
| ------------------------- | --------------- | ----------------------------------------- |
| arap_report_sp            | Report          | Build report                              |
| outstanding_sp            | Report          | Build Report                              |
| ledger_sp                 | Modules, Report | Ledger report on Screen and Printout      |
| summary_sp                | Report          | Summary Report required make_intervals_sp |
| make_intervals_sp         | Modules         | Used in summary_sp                        |
| cash_bank_sp              | Report          |                                           |
| bill_list_sp              | Modules         |                                           |
| challan_sp                | Modules, Report |                                           |
| vehical_challan_sp        | Report          |                                           |
| sales_bill_cummulative_sp | Report          |                                           |

| Object Name                 | Type    | Description                                |
| --------------------------- | ------- | ------------------------------------------ |
| sales_bill                  | Trigger | Maintain CRUD of voucher table             |
| arap_after                  | Trigger | update outstanding_amount in voucher table |
| account_group_view          | View    |                                            |
| account_head_view           | View    |                                            |
| challan_view                | View    |                                            |
| column_value_view           | View    |                                            |
| company_view                | View    |                                            |
| general_ledger_address_view | View    |                                            |
| genral_ledger_view          | View    |                                            |
| item_view                   | View    |                                            |
| voucher_view                | View    |                                            |
| company_view                | view    |                                            |

## Tables

| Table Name             | Trigger | View                                            | Description                            |
| ---------------------- | :-----: | ----------------------------------------------- | -------------------------------------- |
| company                |   No    | company_view                                    |                                        |
| branch                 |   No    | company_view                                    |                                        |
| address                |   No    | company_view, general_ledger_address_view       |                                        |
| account_format         |   No    | account_head_view                               |                                        |
| account_head           |   No    | account_group_view, account_head_view           |                                        |
| account_group          |   No    | account_group_view, general_ledger_view         |                                        |
| general_ledger         |   No    | genral_ledger_view, general_ledger_address_view | check and remove billing_cycle columns |
| unit                   |   No    | challan_view,i tem_view                         |                                        |
| item_group             |   No    | item_view                                       |                                        |
| item                   |   No    | item_view, challan_view                         |                                        |
| challan                |   No    | challan_view                                    |                                        |
| challan_detail         |   No    | challan_view                                    |                                        |
| sales_bill             |   Yes   |                                                 |                                        |
| arap                   |   Yes   |                                                 |                                        |
| voucher_type           |   No    | voucher_view                                    |                                        |
| voucher_type_tax       |   No    |                                                 |                                        |
| voucher                |   No    | voucher_view                                    |                                        |
| voucher_detail         |   No    | voucher_view                                    |                                        |
| voucher_item           |   No    |                                                 |                                        |
| voucher_class          |   No    |                                                 |                                        |
| voucher_class_ledger   |   No    |                                                 |                                        |
| voucher_class_register |   No    |                                                 |                                        |
| voucher_class_tax      |   No    |                                                 |                                        |
| column_property        |   No    | column_value_view                               |                                        |
| client_column_property |   No    | column_value_view                               |                                        |

## Pending Works

|  #  | Party               |    Date    |  Delivery  | Status    | Comment                                                                                                                                                |
| :-: | :------------------ | :--------: | :--------: | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1  | Adinath Enterpriase | 10-02-2020 | 08-12-2020 | Completed | Account Receivable / Payable Reports                                                                                                                   |
|  2  | Adinath Enterpriase | 08-12-2020 | 08-12-2020 | Completed | Sundry Creditors Ledger                                                                                                                                |
|  3  | Adinath Enterpriase | 08-12-2020 | 08-12-2020 | Completed | Summary Reports needs to be created                                                                                                                    |
|  4  | Adinath Enterpriase | 17-12-2020 | 28-12-2020 | Completed | 1, 15 days billing, challan, sales_bill_w CRUD completely redesign, sales_bill table is completely replaced by voucher. Cash & Bank Book report fixed. |

## User Objects

### report_nvc

Argument in of_retrieve should be in following orders. You can skip date argument if not applicable.

1. Branch
1. Start Date
1. End Date
1. Continue the rest.

## Add Report

Please read report_nvc for more details.

1. Create Datawindow
1. Add row into (Table) **form_builder**.
1. Add (Menu) Option.
1. Add Entry in (User Object) **report_nvc.of_set_dataobject()**.
1. Add Entry in (User Object) **report_nvc.of_retrieve()**.

### Code Table

| Table            | Column           |  Code   | Description         |
| ---------------- | ---------------- | :-----: | ------------------- |
| voucher_detail   | row_type         |   H1    | Party               |
| voucher_detail   | row_type         |   H2    | Register            |
| voucher_detail   | row_type         |   T1    | Tax Ledger          |
| voucher_type_tax | account_type     |   GL    | General Ledger      |
| voucher_type_tax | account_type     | PRODUCT | Product             |
| voucher_type_tax | Base             |    B    | Per Bill            |
| voucher_type_tax | Base             |    Q    | Quantity            |
| voucher_type_tax | Base             |    A    | Amount              |
| voucher_type_tax | method           |    F    | Fixed               |
| voucher_type_tax | method           |    M    | Multiplication      |
| voucher_type_tax | method           |    P    | Percentage          |
| arap             | transaction_type |   NR    | New Reference       |
| arap             | transaction_type |   AR    | Accounts Receivable |
| arap             | transaction_type |   AP    | Accounts Payable    |
| arap             | transaction_type |   AD    | Advance             |
| arap             | transaction_type |   OA    | On Account          |
|                  |                  |         |                     |

#### tax Method

As Flat Rate =
As Surcharge =
As Total Amount Rounding =
As User Defined Value =
Based on Quantity =
On Current Sub Total =
On Item Rate =
On Total Sales =
