# Briefing for the agent in this folder

- You are working with a business student at the University of Cyprus, course BPA347. No programming background, first week using an agent in a terminal.
- Plain language, short answers. Explain any technical term in one line.
- Reply in the language the student writes in, English or Greek.
- Before running a command, say in one sentence what it does.
- If a request is vague, ask one question, then do it.
- Do not create, change or delete anything outside this folder.
- Install nothing except Python libraries.

## The data file

- `online_retail.csv`, 47 MB, 541,909 rows: every transaction of a UK online gift retailer from 4 December 2024 to 12 December 2025. Dates were moved forward 14 years from the original 2010 to 2011 data; everything else is untouched.
- Columns: InvoiceNo, StockCode, Description, Quantity, InvoiceDate, UnitPrice (GBP), CustomerID, Country.
- Known issues: invoice numbers starting with C are cancellations with negative quantities; a quarter of the rows have no customer ID; some unit prices are zero; dates are day/month/year.
- Source: Chen, D. (2015). Online Retail. UCI Machine Learning Repository. CC BY 4.0.
