# Miditra & Mivoaka 💸

[![React](https://img.shields.io/badge/React-v19.1.1-blue?logo=react)](https://react.dev/)
[![Nodejs](https://img.shields.io/badge/Node-v22.16.0-green?logo=nodedotjs)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-v5.1.0-white?logo=express)](https://expo.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A full-stack web application that enables users to track personal expenses and income, upload receipts, set up recurring expenses with a defined duration, and receive alerts when they exceed their monthly budget.

> [!IMPORTANT]
> Mivoaka & Miditra is under active development and not yet production-ready.

## **Core Functional Requirements**

### Authentication:

- **Register**, **Login**, **Logout**
- JWT-based authentication for secure access to private routes
- Each user only has access to their own data

### Expense Management:

- Users can **create**, **edit**, **delete**, and **list** expenses
- Each expense includes:
  - **Amount** (required)
  - **Date** (required)
  - **Category** (required)
  - **Description** (optional)
  - **Type**:
    - `One-time` (default)
    - `Recurring`
  - **Receipt Upload** (optional)
  - **Creation Date** (auto-generated)
  - **Start Date** (for recurring only)
  - **End Date** (optional; for recurring only)

### Behaviors:

- **Start Date** defines when a recurring expense should begin showing up in dashboards.
- **End Date** defines when it should stop being included in monthly summaries.
- If no end date is provided, the recurring expense is considered “ongoing”.
- One-time expenses **ignore start/end dates** — they rely only on the expense date.

### Category Management:

- Default categories available on user creation
- Users can:
  - Create new custom categories
  - Edit category names
  - Delete categories (only if not in use)

### Receipt Uploads:

- Supported formats: JPG, PNG, PDF
- Max file size: 5MB (customizable)
- Users can view/download receipts attached to any expense
- Uploads are optional and securely linked to individual expenses

### Recurring Expenses:

- Users can select “Recurring” as the expense type when creating or editing an expense
- Recurring expenses have:
  - **Start Date** (required)
  - **End Date** (optional)
- Recurrence logic:
  - Recurring expenses are **virtualized** monthly in reports — no duplicate entries are created
  - If the current month falls between the start and end dates, the expense is included in that month’s total
- Users can convert an expense from `one-time` to `recurring`, and vice versa

### Income Tracking:

- Users can **add**, **edit**, **delete**, and **list** income entries
- Each income includes:
  - Amount
  - Date
  - Source
  - Description (optional)
  - Creation Date (auto-generated)
- Income is shown in the monthly summaries and budget calculations

### Dashboard & Monthly Summary:

- Displays stats for the current or selected month:
  - Total **income**
  - Total **expenses** (including all recurring expenses active in that month)
  - Remaining **balance** (Income − Expenses)
- Visualizations:
  - Pie chart for expense categories
  - Bar chart for monthly spending over time
- Filters:
  - By custom date range
  - By category or expense type

### Budget Monitoring & Alerts:

- If monthly **expenses exceed income**, show a **warning message**:
  - "You’ve exceeded your budget for this month by $X"
  - Visible in dashboard header or via toast
- Triggered only when:
  - Sum of active expenses (including recurring within date range) > sum of incomes

### User Profile & Settings: (Optional)

- View account info (email, creation date)
- Change password
- Enable dark mode toggle

### Access Control & Security

- All data is **user-scoped** (no cross-user access)
- Auth tokens required for API access
- Uploaded files are securely stored
- Input validation and error handling for all user actions
