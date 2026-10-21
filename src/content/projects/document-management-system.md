---
title: Document Management System
summary: A team-built document prototype connecting a React upload and retrieval flow to Go APIs and MongoDB.
subtitle: Go | React | MongoDB
timeframe: May 2025
role: Full-stack contributor on a team of three
status: prototype
technologies: [Go, React, MongoDB, "REST APIs", Git]
featuredOrder: 1
sourceUrl: https://github.com/JohnEdwards700/Document-Management-System
keyContributions:
  - Implemented REST API functionality for document handling and service communication.
  - Contributed to a MongoDB schema for document queries and operations.
  - Collaborated with two teammates across modular components and version control.
outcome: The repository shows a working client-to-storage path for document upload and retrieval.
---

## Problem and scope

The team set out to build a small document-management workflow: users could upload files, find them again, and work with them through a web interface. The repository combines a React client, a Go service using Fiber, and MongoDB persistence. The README describes upload, retrieval, and editing as the target workflow.

## My contribution and team boundary

John contributed to the file API and data model as one member of a three-person team. The repository contains a `File` record with a UUID, filename, size, and byte content, stored in a user's MongoDB document. The React upload flow queues selected files, converts their bytes into a JSON array, and posts them to the Go service. The API then returns the file identifier and metadata; a separate endpoint retrieves a file by user email and file ID as an attachment.

## Engineering decisions

- The Go service groups user and file handlers behind REST routes, while the React client handles the upload interaction and retrieval flow.
- File metadata and content are kept together in the user's MongoDB record; UUIDs distinguish individual files, while the API can return a file by its ID.
- The client uses a drop zone to select files and sends their content to the API. This makes the browser-to-service boundary visible in the project rather than hiding it behind a generic upload widget.

## Result and limits

The repository provides a concrete upload-and-retrieval implementation to inspect. The code currently wires user creation and deletion, user lookup, file upload, and single-file retrieval routes. Although the README sketches editing as part of the workflow and a file-deletion method exists in the model, the current server does not wire file update or file deletion routes. The project was completed by a team, and no hosted demo, usage data, or production deployment is documented. The main engineering lesson was how a file lifecycle crosses client state, an API contract, and a persistent data model—and how those layers need to agree for the workflow to be complete.
