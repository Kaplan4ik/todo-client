# Todo Client

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)

---

## Introduction

Welcome to todo-client, a front-end project designed to provide a seamless and secure to-do list management experience. This application integrates Auth0 for user authentication, allowing users to sign in and manage their personalized to-do lists. Each user has access to their own unique set of tasks, ensuring privacy and data security.

The application also connects to a back-end service, enabling the storage of all to-do list entries in a database. This ensures that users can access and manage their tasks across sessions and devices. With multi-user support, each user can independently create, update, and track their to-do lists without interference from others.

---

## Dependencies

- [pnpm](https://pnpm.io/)
  - install via npm with `npm install -g pnpm`

---

## Installation

- Clone the repository
- Install the dependencies with `pnpm install`
- Create a `.env` file in the root of the project ( ideally by copying `.env.example` ).

> [!WARNING]
> Without the required environment variables, the project will not run. Please ensure that you have the necessary values in your `.env` file.

- Install husky hooks with `pnpm prepare`
---

## Usage

- Start the development server with `pnpm dev`
- Access the application at `http://localhost:3000`
- Run the tests with `pnpm test`
