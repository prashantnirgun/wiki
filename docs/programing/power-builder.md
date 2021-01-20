# PowerBuilder

### Buffer

```
ldt_voucher_old = dw.Object.column.Primary.Original[li_row]
ldt_voucher_new = dw.Object.column.Primary.Current[li_row]
```

### Find()

```
li_find = dw.find("voucher_id = " + String(ll_voucher_id) ,1, li_rows)
```

### Error Check

```
IF SQLCA.SQLCode = -1 THEN
    MessageBox("SQL error", SQLCA.SQLErrText)
END IF
```

### Messagebox

MessageBox ( title, text {, icon {, button {, default } } } )

#### Icon

- Information! (Default)
- StopSign!
- Exclamation!
- Question!
- None!

#### Button

- OK! – (Default) OK button
- OKCancel! – OK and Cancel buttons
- YesNo! – Yes and No buttons
- YesNoCancel! – Yes, No, and Cancel buttons
- RetryCancel! – Retry and Cancel buttons
- AbortRetryIgnore! – Abort, Retry, and Ignore buttons

```
MessageBox("Warning","Message", StopSign!, YesNo!, 2)
```
## Important Links

- [Topwiz](https://www.topwizprogramming.com/)