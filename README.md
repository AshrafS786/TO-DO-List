# React + Vite

---

Overview:
This project demonstrates the implementation of task rendering using React.js. Task rendering is a fundamental aspect of many web applications, especially those involving to-do lists, project management tools, and more. This repository serves as a starting point for understanding how to efficiently render tasks dynamically in a React.js application.
 
---

Features :

![Alt text](/Homepage.jpg.png)

![Animation](/todo-video.gif)

Task Creation : Users can create new tasks with relevant details.



Task Display: Tasks are rendered dynamically in the UI, facilitating easy viewing and management.

Task Completion: Completed tasks will display a green bubble and have a line through them, indicating that the task has been completed. Incomplete tasks will display a red bubble.

Task Deletion: Tasks can be deleted directly if they are marked as completed. If a task is not completed, a confirmation popup will appear for the user to confirm deletion. If the user selects "OK", the task will be deleted, otherwise, if "Cancel" is selected, the task will not be deleted.

Task Counter: The top section of the application will display the total number of tasks completed out of the total tasks assigned, providing users with a quick overview of their progress.

Responsive Design : TaskMaster is responsive and works seamlessly across various devices, including desktops, tablets, and smartphones.


---

Technologies Used :

-> React.js : The core framework used for building the user interface.

-> JavaScript (ES6+) : For writing the application logic and handling task data.

-> TailWind CSS (or styled-components) : For styling the user interface and   enhancing the visual appeal.

-> Git : Version control system for managing the project codebase.

-> GitHub : Hosting the project repository and collaboration among contributors.

---

Usage :

To run this project locally, follow these steps:

--> Clone the repository: git clone https://github.com/yourusername/task-rendering-react.git 

--> Navigate to the project directory: cd TODO-LIST-WEBSITE

--> Install dependencies: npm install

--> Start the development server: npm run dev

--> Open your web browser and visit http://localhost:5173 to view the application.


---

License :
This project is licensed under the MIT License - see the LICENSE.md file for details.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---