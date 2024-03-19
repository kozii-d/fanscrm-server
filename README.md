# FansCRM test task

## System Requirements

Before you begin, ensure that your system meets the following requirements:

- **Docker:** Ensure Docker is installed on your system. If not, download it from [Docker's official website](https://www.docker.com/get-started/).
- **Make:** Make sure you have Make installed on your system. Make is typically available on Unix-like operating systems. If Make is not installed, you can install it using the following command:
    ```bash
    sudo apt update
    sudo apt install make
    ```

## Getting Started

Follow these steps to get started with your Traefik Home Server:


1. **Clone Repository:** Clone this repository to your local machine.

2. **Environment Setup:**
    - Copy the `.env.example` file and rename it to `.env`. Execute the following command in your terminal:
      ```
      cp .env.example .env
      ```
    - Open the `.env` file and enter necessary values for the variables according to your requirements.
3. **Fast application starting:**
    - Execute the following command in your terminal:
      ```bash
      make init
      ```
4. **Utilize Makefile:** Utilize the provided Makefile for streamlined command execution. Run `make help` in your terminal to view a list of available commands along with their descriptions.