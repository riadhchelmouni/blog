# Fullstack Blog Project

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup (Django)](#backend-setup-django)
  - [Frontend Setup (React)](#frontend-setup-react)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## About the Project

This is a fullstack blog application built with Django for the backend API and React for the frontend user interface. It allows users to create, view, and manage blog posts, including text content and associated images.

*(Optional: Add a screenshot of your working application here. You can upload an image to your repo and link it, e.g., `![Screenshot of Blog App](screenshot.png)`)*

## Features

* **Create New Posts:** Users can add new blog posts with a title, content, and an optional image.
* **View All Posts:** Displays a list of all existing blog posts.
* **View Single Post:** Detailed view for each individual blog post.
* **Image Uploads:** Support for attaching images to blog posts.
* **RESTful API:** A clean and well-structured API built with Django REST Framework.
* **Modern Frontend:** A responsive and interactive user interface built with React.
* **CORS Enabled:** Properly configured for cross-origin communication between frontend and backend.

## Technologies Used

### Backend (Django)

* **Python:** Programming language
* **Django:** Web framework
* **Django REST Framework (DRF):** For building the API
* **Pillow:** (Python Imaging Library) For image processing
* **Django-CORS-Headers:** For handling Cross-Origin Resource Sharing

### Frontend (React)

* **JavaScript:** Programming language
* **React.js:** Frontend library
* **Axios:** For making HTTP requests
* **React Router DOM:** For client-side routing

### Database

* **SQLite3:** Default database for development (can be easily switched to PostgreSQL, MySQL, etc., for production)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

* **Python 3.8+**
* **Node.js (LTS version) & npm** (or Yarn)
* **Git**

### Backend Setup (Django)

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/riadhchelmouni/blog.git](https://github.com/riadhchelmouni/blog.git)
    cd blog # Navigate to your project root
    ```
2.  **Create and activate a virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate # On Windows: .\venv\Scripts\activate
    ```
3.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
4.  **Install backend dependencies:**
    ```bash
    pip install -r requirements.txt # If you have a requirements.txt, otherwise list packages
    # If no requirements.txt, run:
    # pip install Django djangorestframework Pillow django-cors-headers
    ```
    *(**Note:** It's highly recommended to create a `requirements.txt` by running `pip freeze > requirements.txt` from your `backend` directory before committing)*
5.  **Run database migrations:**
    ```bash
    python manage.py migrate
    ```
6.  **Create a superuser (for Django Admin access):**
    ```bash
    python manage.py createsuperuser
    # Follow prompts to create username, email, and password
    ```
7.  **Start the Django development server:**
    ```bash
    python manage.py runserver
    ```
    The backend API will be available at `http://127.0.0.1:8000/`. You can access the Django Admin panel at `http://127.0.0.1:8000/admin/`.

### Frontend Setup (React)

1.  **Open a new terminal window.**
2.  **Navigate to the frontend directory:**
    ```bash
    cd ~/fullstack_blog_project/frontend # Adjust path if needed
    ```
3.  **Install frontend dependencies:**
    ```bash
    npm install
    # or yarn install
    ```
4.  **Start the React development server:**
    ```bash
    npm start
    # or yarn start
    ```
    The React application will open in your browser, usually at `http://localhost:3000/`.

## Usage

Once both the backend and frontend servers are running:

* Open your browser to `http://localhost:3000/`.
* View existing blog posts.
* Click on a post to see its details.
* Navigate to "Add New Post" to create a new entry.
* Access the Django Admin at `http://127.0.0.1:8000/admin/` to manage posts, users, and other data directly.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information. *(If you have an actual LICENSE file)*

## Contact

Riadh Chelmouni - your_email@example.com

Project Link: [https://github.com/riadhchelmouni/blog](https://github.com/riadhchelmouni/blog)

## Acknowledgments

* Django Documentation
* React Documentation
* Stack Overflow (for countless debugging sessions!)
* *(Add any other resources or people who helped you)*
