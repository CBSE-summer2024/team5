# Mart.ps Microfrontend Architecture

## Project Overview

**Project Name:** Mart.ps Microfrontend 

**Project Description:**  
This project showcases a microfrontend architecture implementation for Mart.ps, an e-commerce case study designed to improve modularity, scalability, and collaboration among various development teams. Mart.ps is an online supermarket that leverages microfrontend architecture to provide a seamless and dynamic shopping experience, integrating multiple front-end frameworks into a single, cohesive application. The project utilizes modern web development techniques to enhance performance, maintainability, and ease of deployment.

**Project Goals:**  
- **Modular Development:** Enable independent development and deployment of microfrontend modules to improve scalability and reduce dependency conflicts.
- **Enhanced User Experience:** Offer a cohesive, high-performance user experience by integrating search, menu, and filter components developed in different frameworks.
- **Seamless Integration:** Utilize Webpack Module Federation to integrate components developed with Lit, React, and Vue.js into a Vue.js host application.
- **Target Audience:** Mart.ps targets tech-savvy consumers and businesses looking for flexible and customizable e-commerce solutions.

---

## Architecture

**Microfrontend Architecture:**  
The chosen architecture for Mart.ps is Microfrontend using Webpack Module Federation. This approach allows different parts of the application to be developed with different technologies while sharing common resources, leading to faster and more efficient development cycles.

**Communication Model:**  
The microfrontends communicate directly, leveraging shared state management and event-based communication to synchronize state across components. This model ensures each component remains loosely coupled yet fully functional within the main application.

**Deployment Strategy:**  
The microfrontend components are currently integrated into a single host application (Vue.js). The host application loads the individual components dynamically, providing flexibility in development without deploying each microfrontend independently.

---

## Integration Approach

**Integration Method:**  
The integration is achieved through client-side routing and Webpack Module Federation, allowing each microfrontend module to be loaded on-demand. This approach minimizes initial load time and optimizes resource usage.

**Integration Points:**  
- **Navigation:** Integrated through client-side routing, allowing smooth transitions between components.
- **Data Sharing:** Shared through a common state management pattern, ensuring consistent data flow.
- **UI Elements:** Each component manages its UI, ensuring minimal conflicts and independent styling.

**Integration Challenges:**  
- **Framework Compatibility:** Initial integration attempts with Angular and React faced significant challenges due to compatibility issues, making maintenance complex. Switching to Vue.js , React and Lit  simplified this integration.

---

## Getting Started

**Prerequisites:**  
- Node.js (version 14.x or higher)  
- npm (version 6.x or higher)  
- Git  

**Installation:**
1. Clone the repository:  
   ```bash
   git clone https://github.com/CBSE-summer2024/team5.git
cd component-directory
   npm install

2. Start each microfrontend component:
    npm start

3. Start the host application:
  cd host-app
  npm install
  npm start

**Project Organization**
The project is organized into separate folders for each microfrontend, including shared libraries and resources:
 
![Screenshot 2024-08-31 184310](https://github.com/user-attachments/assets/e1d6a5ca-02b6-478f-9090-4f89d62ff8b8)

**Microfrontend Modules**
- **Search Component:** Developed with Lit, focuses on efficient search functionalities.
- **Menu Component:** Built using React, provides an interactive and responsive navigation menu.
- **Filter Component:** Created with Vue.js, handles dynamic product filtering.

