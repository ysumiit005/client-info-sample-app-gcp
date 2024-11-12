
# Client Information App

## Overview

The **Client Information App** is a simple Node.js application that displays client-specific information such as IP address, browser details, and geolocation data. This application is designed for educational purposes, allowing students to learn how to work with Node.js, fetch client information, and deploy to Google Cloud.

### Features

- Displays client's IP address, browser information, and operating system.
- Fetches geolocation data (city, region, country, latitude, and longitude) based on the IP address.
- Styled with Bootstrap for a simple and clean user interface.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher recommended)
- **npm** (comes with Node.js)
- **Google Cloud SDK** (for deploying to Google App Engine)

## Getting Started

### 1. Clone the Repository

To clone this repository to your local machine, run:

```bash
git clone <repository-url>
cd client-info-app
```

Replace `<repository-url>` with the actual URL of the repository.

### 2. Install Dependencies

Navigate to the project directory and install the required Node.js packages:

```bash
npm install
```

This command installs the necessary dependencies listed in the `package.json` file, including **Express**, **request-ip**, and **axios**.

### 3. Run the Application Locally

To start the application on your local machine, use the following command:

```bash
node app.js
```

By default, the app will run on `http://localhost:3000`. Open this URL in your browser to see the client information displayed.

### 4. Deploying to Google App Engine

You can deploy this application to Google Cloud using Google App Engine. Follow these steps:

#### Step 1: Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Make sure **App Engine** and **Cloud Build** APIs are enabled.
4. Before deployment grant App Engine Deployer role to App Engine default service account. In the Google Cloud Console navigate to IAM & Admin next go to IAM. You should see permissions for your project. There will be Default App Engine Service account - please add App Engine Deployer role using pencil icon beside.

#### Step 2: Create `app.yaml` for Google App Engine

In the root directory of your project, create a file named `app.yaml` with the following content:

```yaml
runtime: nodejs20
instance_class: F1
env: standard
```

This configuration file specifies the runtime environment and instance class for the app on Google App Engine.

#### Step 3: Deploy the Application

1. Authenticate your Google Cloud CLI:

   ```bash
   gcloud auth login
   ```

2. Set the project ID (replace `your-project-id` with your actual Google Cloud Project ID):

   ```bash
   gcloud config set project your-project-id
   ```

3. Deploy the application:

   ```bash
   gcloud app deploy
   ```

4. Confirm the deployment if prompted. Once completed, Google will provide a URL for your deployed application.

#### Step 4: Access the Deployed Application

After successful deployment, visit the provided URL to see your app running on Google App Engine. The application should now display the IP, browser information, and geolocation data for each visitor.

## Additional Notes

- The app may display "localhost" as the IP address when running locally. Real IP data is displayed when the app is hosted on a server.
- Location information will show "N/A" if it’s unable to fetch data based on the IP address.

## Cleanup Instructions

After completing the deployment exercise, it's essential to clean up the resources to avoid unnecessary charges on your Google Cloud account. Follow these steps to remove the resources:

1. **Delete the App Engine Application**: 
   - Open the [Google Cloud Console](https://console.cloud.google.com/).
   - Go to **App Engine > Settings**.
   - Click **Disable Application**. This will stop all running services and delete the App Engine instance.

2. **Delete the Google Cloud Project**: 
   - If the project was created specifically for this exercise and is no longer needed, you can delete the entire project, which will remove all resources associated with it.
   - Go to **IAM & Admin > Manage Resources** in the Cloud Console.
   - Select the project used for this exercise.
   - Click **Delete** and confirm the action.

This cleanup will ensure that no unnecessary charges are incurred and that your Google Cloud credits are preserved for future projects.

## License

This project is licensed under the MIT License. Feel free to use it for educational purposes.
