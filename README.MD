# Hybrid Automation Framework

A scalable automation framework built using WebdriverIO that supports:
- Web Automation
- API Automation
- Mobile Automation (Android)

## Tech Stack

| Tool          | Purpose                |
| ------------- | ---------------------- |
| WebdriverIO   | Test Automation        |
| Mocha         | Test Runner            |
| Appium        | Mobile Automation      |
| Axios         | API Testing            |
| AJV           | JSON Schema Validation |
| Allure Report | Reporting              |
| Node.js       | Runtime                |

---

## Framework Architecture

```text
automation-framework
│
├── api
│   ├── apiClient.js
│   ├── apiEndpoints.js
│   ├── userSchema.js
│   └── userService.js
│
├── config
│   ├── wdio.web.conf.js
│   ├── wdio.api.conf.js
│   └── wdio.mobile.conf.js
│
├── data
│   ├── api
│   ├── web
│   └── mobile
│
├── pages
│   ├── web
│   └── mobile
│
├── test
│   ├── api
│   ├── web
│   └── mobile
│
├── utils
│
└── package.json
```



## Features
 =>Web Automation
 -----------------
- Page Object Model (POM)
- Data Driven Testing
- Reusable Utilities
- Screenshot Capture
- Allure Reporting

=>API Automation
 -----------------
- CRUD Operations
- Request Abstraction
- JSON Schema Validation
- Response Assertions
- Data Driven Testing

=>Mobile Automation
 -----------------
- Android Automation
- Appium Integration
- Page Object Model
- Reusable Screen Objects
- Data Driven Testing

## Execute Tests
Run Web Tests   -> npm run test:web
Run API Tests   -> npm run test:api
Run Moile Tests -> npm run test:mobile

## Generate Allure Report
allure generate reports/allure-results --clean -o reports/allure-report
allure open reports/allure-report

## Sample Coverage
=>Web
- Login
- Inventory Validation
=>API
- GET User
- CREATE User
- UPDATE User
- DELETE User
- PATCH User
- Schema Validation
=>Mobile
- Login
- Inventory Validation
- Logout

## Author

Ashutosh Kumar
