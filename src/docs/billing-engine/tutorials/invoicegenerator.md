<meta name="robots" content="noindex">

# Invoice Generator

You can create custom PDF invoices to send to customers. For example, invoices can be by provider, subaccount, family, or cost (billed, effective, list).

To access the invoice generator, you must have either:
* FinOps Organization Admin permissions.
* Billing Engine Admin and Cost Intelligence Admin permissions.

> **Note**:
>
> As you work, your changes are saved automatically. So, it's  recommended to always make a copy of the out-of-the-box invoice template and customize it rather than editing it. This way, you'll always have a clean copy to start from. You can also manually make a backup copy of your template to use as a starting point for new invoices.
>
> If you do create an invoice from scratch, make sure you include a filter on the date range.

Once you’ve created an invoice, you can:
* Download each invoice report (template) with all the invoices for that template.
* [Schedule an invoice](billing-engine/tutorials/invoicegenerator?id=schedule-invoice) using the workflow builder.

## Create an Invoice

1. Go to **Billing Engine** > **Invoice Generator**.
2. On the out-of-the-box Billing Invoice template, click <img height="18" src="https://github.com/user-attachments/assets/ef26a4db-838f-4fed-a187-d0d30d03f9fa" /> > **Duplicate**.
    You should always make a copy of the out-of-the-box template rather than editing it. As you work, your changes are saved automatically.

3. Update the invoice:

    * [Customize the data](billing-engine/tutorials/invoicegenerator?id=customize-the-data-in-your-invoice). Make sure your invoice includes a filter for the billing period, including a start and end date field. For example, <i>BillingPeriodStart</i> with start and end date fields selected.

       If you group your invoice by a field, it’s a good idea to also add that field to the header so it’s easy to see what the invoice is for.

       <img width="250" src="https://github.com/user-attachments/assets/a845d17b-c0d1-4569-93c5-e75fb6f2f33d" />

    * [Customize the form](billing-engine/tutorials/invoicegenerator?id=customize-the-invoice-form).

4. Click **Preview**.
5. Update the parameters (such as customer name, address, invoice number, description, dates) for the invoice and click **Preview Report**. You can select **Null** to exclude that field from the invoice.
6. In the preview, you can:
    * View the invoices by clicking the tabs at the bottom.
    * Edit.
    * Download the invoices <img height="18" src="https://github.com/user-attachments/assets/9e88f94e-c828-4dbe-90bb-ed29fee96027" />.
    * [Schedule the invoice](billing-engine/tutorials/invoicegenerator?id=schedule-invoice) in the workflow builder.

7. To rename the invoice, click <img height="18" src="https://github.com/user-attachments/assets/c095227c-4efb-41a2-bda2-e4a9c7714d7b" /> to go back to the list of invoice reports. On the report, click <img height="18" src="https://github.com/user-attachments/assets/ef26a4db-838f-4fed-a187-d0d30d03f9fa" /> > **Rename**.

## Customize the Data in Your Invoice
Make sure your invoice includes a filter for the billing period, including a start and end date field. For example, BillingPeriodStart with start and end date fields selected.

<img width="250" src="https://github.com/user-attachments/assets/a845d17b-c0d1-4569-93c5-e75fb6f2f33d" />



 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Date range of the invoice (monthly, quarterly)</summary>

<div style="padding-left:16px">

Make sure your invoice has a filter for the billing period, which includes a start and end date field. For example, <i>BillingPeriodStart</i>.

<img width="250" src="https://github.com/user-attachments/assets/2fab9228-43f5-4596-9835-f9adc822fb53" />

Once you have the field in your invoice, click <b>Preview</b> and select the <b>Invoice Date Range Start</b> and <b>End</b>, and the <b>Invoice Issue Date</b>. Then click <b>Preview Report</b>.

You can use any custom date range you have available for your data. For example, you can create monthly invoices, quarterly invoices, or historical invoices for the previous 2 years. 

 </div>
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Summary level invoice or list out amounts by family, subaccounts, service, or service category</summary>

<div style="padding-left:16px">

You can use any field in the Data tab to summarize your data in the invoice. For example, invoices can be by provider, subaccount, family, or cost (billed, effective, list).

If you want to create one invoice per data field (such as provider, family, or cost), use <b>Configuration</b> > <b>Report Group</b> > <b>Associated Column</b> and select the data field (such as <i>Provider</i>, <i>BillingFamilyName</i>, <i>ListCost</i>).

<img width="250" src="https://github.com/user-attachments/assets/f7818a7b-809a-4258-b067-da213e6d826c" />

Let’s say you want to create an invoice by family, and you have a total of 50 accounts in 10 families:

* If you use <b>Configuration</b> > <b>Report Group</b> > <b>Associated Column</b> and select <i>BillingFamilyName</i>, you’ll get one invoice per family with one row per account in the family, so a total of 5 invoices.
* If you use <b>Configuration</b> > <b>Report Group</b> > <b>Associated Column</b> and select <i>None</i>, you’ll get one invoice with a total of 50 rows (one row for each family).

You can also use multiple data fields to subtotal. For example, you may want to show totals by both Service and Description. In the Body, hover over the table and click <img height="18" src="https://github.com/user-attachments/assets/503b582c-fce2-4e87-8a5c-402915e6f619" /> to view the Dynamic Table Configuration, where you can select the groups and columns for your table.

<img width="250" src="https://github.com/user-attachments/assets/208e4c20-edf7-49d8-9c90-ffad52a26a35" />

 </div>
 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Cost to show in the invoice (<i>BilledCost, ProviderCost</i>)</summary>

<div style="padding-left:16px">

You can change the cost field you show in the invoice. The out-of-the-box template uses <i>BilledCost</i>. For example, you can change it to <i>ProviderCost</i> by clicking {} and selecting <i>ProviderCost</i>.

<img width="400" src="https://github.com/user-attachments/assets/720b822a-7241-4413-9695-0a3c848fedb8" />


 </div>
 </details>


   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Formula (create profit: <i>BilledCost - ProviderCost</i>, or custom tax calculation)</summary>

<div style="padding-left:16px">

You can create a custom formula to include in your invoices.

1. Click <b>Formula</b> <img height="18" src="https://github.com/user-attachments/assets/0e63f319-b8f1-45c2-9b1a-a4ff523c1129" />.
2. Select <b>Standardized Syntax</b>.
3. Enter your formula. For example, you can create a field called <i>Profit</i>. The formula can be <i>BilledCost - ProviderCost</i>.

   <img width="400" src="https://github.com/user-attachments/assets/96cf7db0-f002-4c4c-ba8a-15d887ec9423" />

4. Click <b>Save</b>.
5. You can see the new formula saved in the <b>Data & Parameters</b> > <b>Values</b> and use it in your invoices.
   <img width="250" src="https://github.com/user-attachments/assets/9d055623-9ec4-4abc-a3d4-40291b985ef0" />


 </div>
 </details>


## Customize the Invoice Form

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Add a field to the header</summary>

<div style="padding-left:16px">

  If you group your invoice by a field, it’s a good idea to also add that field to the header so it’s easy to see what the invoice is for.

 </div>
 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Banner</summary>

<div style="padding-left:16px">

You can add a text box on your invoice to display a message or banner. Change the background color to make it stand out more.

 </div>
 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Copy and paste elements</summary>

<div style="padding-left:16px">

  You can select an item and click <b>Edit</b> > <b>Copy</b> and then <b>Edit</b> > <b>Paste</b>.

 </div>
 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Tables: dynamic or simple tables</summary>

<div style="padding-left:16px">

Dynamic tables <img height="18" src="https://github.com/user-attachments/assets/f2f5d6ad-452d-4920-8371-a039b530c445" /> automatically add rows for each record in the data column. You can also add static text to the cells.

In the Body, hover over the table and click <img height="18" src="https://github.com/user-attachments/assets/503b582c-fce2-4e87-8a5c-402915e6f619" /> to view the Dynamic Table Configuration, where you can select the groups and columns for your table.

<img width="250" src="https://github.com/user-attachments/assets/208e4c20-edf7-49d8-9c90-ffad52a26a35" />

Simple tables <img height="18" src="https://github.com/user-attachments/assets/6701b51d-cb7c-438c-8f49-3a5b11914a63" /> show one item per cell. It can be either text or a field.

 </div>
 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Add columns to table</summary>

<div style="padding-left:16px">

For example, you may want to show both Service and Description. In the Body, hover over the table and click <img height=18 src="https://github.com/user-attachments/assets/503b582c-fce2-4e87-8a5c-402915e6f619"> to view the Dynamic Table Configuration, where you can select the groups and columns for your table.

<img width="250" src="https://github.com/user-attachments/assets/208e4c20-edf7-49d8-9c90-ffad52a26a35" />

You may need to manually resize the widths of the existing columns to add more columns.
 </div>
 </details>


## Schedule Invoice

You can schedule an invoice to be sent to specific recipients according to a trigger. You define this using the [workflow builder](cost-intelligence/tutorials/workflow-builder/).

1. Go to **Billing Engine** > **Invoice Generator**.
2. Click **Schedule Invoice** > **Create New Flow**.
3. **Name** the workflow (and add a **Description**).
4. Add a [trigger](cost-intelligence/tutorials/workflow-builder/?id=create-a-workflow) for scheduling.
6. Add a [send action](cost-intelligence/tutorials/workflow-builder/?id=create-a-workflow), such as <i>Send Email</i>.
7. In the **Action Send Email**, click **Insert/Attach** > **Export Report/Invoice** and select the invoice.
8. For the dates in the **Report Parameters**, you can either pick a specific date or use a token, such as {{LAST_MONTH_START}} or {{TODAY}}.

   If you use specific dates, make sure the period of the data and the issue date are always the same.

   You can use tokens, for example:
   
    * **Invoice Period - Start** set to `{{LAST_MONTH_START}}`
    * **Invoice Period - End** set to `{{LAST_MONTH_END}}`
    * **Issued Date** set to `{{TODAY}}`, so the **Issued Date** is the same date that the email (and invoice) are sent

10. Click **Save**.
