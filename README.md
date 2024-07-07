# Construction Company Dashboard

This project is a comprehensive dashboard application for a construction company built using React, Redux, and React Router. It includes various modules for managing companies, employees, contractors, providers, vehicles, zones, and events. The application integrates user authentication and role-based access controls, and it supports lazy loading for improved performance.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Construction Company Dashboard is designed to provide an all-in-one management solution for construction companies. It helps in managing employees, contractors, providers, vehicles, zones, and events efficiently. The application supports real-time data updates and provides a user-friendly interface for easy navigation.

## Features

- User Authentication and Authorization
- Company Management
- Employee Management
- Contractor Management
- Provider Management
- Vehicle Management
- Zone Management
- Event Management
- Notifications
- Real-time Updates with Redux
- Lazy Loading for Enhanced Performance
- Responsive Design

## Architecture

The application follows a modular architecture with the following main components:

- **React**: Frontend library for building user interfaces
- **Redux**: State management
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- A running backend server to handle API requests

### Steps

1. **Clone the repository**
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Start the development server**:
    ```bash
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## Usage

### Authentication

Ensure you have a backend server running that handles authentication. The frontend will use session storage to manage authentication tokens.

### API Integration

Make sure your backend APIs are running and accessible. The frontend application makes API requests using Axios to fetch and update data.

## Routes

The application uses React Router for client-side routing. Below is an overview of the main routes:

- **Dashboard**
  - `/dashboard/company`
  - `/dashboard/zones`
  - `/dashboard/contractors-outlet`
  - `/dashboard/providers-outlet`
  - `/dashboard/events-panel`
  - `/dashboard/notification_provider`
  - `/dashboard/profile_provider`
  - `/dashboard/provider`
  - `/dashboard/profile`
  - `/dashboard/notificationtab`

- **Company**
  - `/dashboard/company/user-doc-panel`
  - `/dashboard/company/update-data`
  - `/dashboard/company/workshift-panel`
  - `/dashboard/company/roles-panel`
  - `/dashboard/company/add-new-role`
  - `/dashboard/company/add-update-role/:id`
  - `/dashboard/company/vehicle-doc-panel`
  - `/dashboard/company/notification-panel`
  - `/dashboard/company/create-notification`
  - `/dashboard/company/employees`
  - `/dashboard/company/updateemployee`
  - `/dashboard/company/addemployee`
  - `/dashboard/company/addemployee/:id`
  - `/dashboard/company/uploademployeefile`
  - `/dashboard/company/allvehicles`
  - `/dashboard/company/addupdatevehicle`
  - `/dashboard/company/addupdatevehicle/:id`

- **Zones**
  - `/dashboard/zones/singlezonedetails`
  - `/dashboard/zones/showdevices`
  - `/dashboard/zones/authmodal`
  - `/dashboard/zones/updatezone`

- **Contractors**
  - `/dashboard/contractors-outlet/contractor-panel`
  - `/dashboard/contractors-outlet/create-order`
  - `/dashboard/contractors-outlet/add-contractor`
  - `/dashboard/contractors-outlet/update-contractor`
  - `/dashboard/contractors-outlet/employee-contractor-details`
  - `/dashboard/contractors-outlet/contractor-approve-document`
  - `/dashboard/contractors-outlet/upload-contractor`
  - `/dashboard/contractors-outlet/contractor-details`
  - `/dashboard/contractors-outlet/provider-detail`
  - `/dashboard/contractors-outlet/vehicle-detail`

- **Events**
  - `/dashboard/events-panel/events`
  - `/dashboard/events-panel/normal-events`
  - `/dashboard/events-panel/onu-events`
  - `/dashboard/events-panel/incomming-envent-detail/:id`
  - `/dashboard/events-panel/validation-envent-detail/:id`

- **Providers**
  - `/dashboard/providers-outlet/providers-panel`
  - `/dashboard/providers-outlet/create-order`
  - `/dashboard/providers-outlet/upload-contractor`
  - `/dashboard/providers-outlet/order-details`
  - `/dashboard/providers-outlet/provider-detail`
  - `/dashboard/providers-outlet/vehicle-detail`
  - `/dashboard/providers-outlet/add-providers`
  - `/dashboard/providers-outlet/update-providers`
  - `/dashboard/providers-outlet/employee-providers-details`
  - `/dashboard/providers-outlet/approve-documents`
  - `/dashboard/providers-outlet/upload-provider`
  - `/dashboard/providers-outlet/providers_deatail_page`

- **Provider Workflow**
  - `/dashboard/provider/orders`
  - `/dashboard/provider/employees`
  - `/dashboard/provider/vehicles`
  - `/dashboard/provider/vehicles-details`
  - `/dashboard/provider/complete-order`
  - `/dashboard/provider/provider-order-detail`
  - `/dashboard/provider/order-detail`
  - `/dashboard/provider/create-employee`
  - `/dashboard/provider/add-vehicles`
  - `/dashboard/provider/update-employee`
  - `/dashboard/provider/update-order`
  - `/dashboard/provider/upload-doc`

- **Contractor Workflow**
  - `/dashboard/profile`
  - `/dashboard/notificationtab`
  - `/dashboard/edit-profile`
  - `/dashboard/addvehical`
  - `/dashboard/search-vehicle`
  - `/dashboard/search-employe`
  - `/dashboard/add-new-employe`
  - `/dashboard/add-vehicle-docs`
  - `/dashboard/employee-contract-detail`
  - `/dashboard/notification-panel`
  - `/dashboard/vehicle-contract-detail`
  - `/dashboard/user-contract-detail`
  - `/dashboard/contracts`

## Contributing

We welcome contributions from the community. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
