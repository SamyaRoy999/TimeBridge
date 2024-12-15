# Dynamic Event Calendar Application

## Project Overview

This project is a feature-rich **Dynamic Event Calendar Application** built using React.js. It allows users to manage events dynamically by adding, editing, deleting, and viewing events on a calendar interface. The project demonstrates advanced React logic, clean UI design with **shadcn** components, and deployment capabilities.

## Features

### Core Features
1. **Calendar View**:
   - Displays a monthly grid with proper alignment for weekdays and weekends.
   - Allows navigation between months with "Previous" and "Next" buttons.
   - Highlights the current day and visually distinguishes the selected day.

2. **Event Management**:
   - Users can add events by clicking on a day in the calendar.
   - Events can be edited or deleted.
   - Each event includes:
     - Event name
     - Start time and end time
     - Optional description

3. **Event List**:
   - A modal or side panel displays all events for the selected day.

4. **Data Persistence**:
   - Events are saved using **localStorage**, ensuring they persist between page refreshes.

### Bonus Features
- Drag-and-drop functionality to reschedule events between days.
- Color-coded events based on categories (e.g., work, personal, others).
- Export events for a specific month as a **JSON** or **CSV** file.

## Technologies Used

- **Frontend**: React.js with functional components and hooks
- **UI Components**: [shadcn](https://shadcn.dev/) for a modern and clean design
- **State Management**: React's useState and useEffect hooks
- **Persistence**: localStorage for data storage
- **Deployment**: Deployed on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/dynamic-event-calendar.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dynamic-event-calendar
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

## Usage Instructions

1. **Add an Event**:
   - Click on any day in the calendar grid.
   - Fill out the event details (name, start time, end time, description).
   - Save the event.

2. **Edit/Delete Events**:
   - Click on a day with events to view the event list.
   - Use the edit or delete buttons to manage the events.

3. **Navigate Between Months**:
   - Use the "Previous" and "Next" buttons to switch months.

4. **Filter Events** (if implemented):
   - Use the search bar to filter events by keyword.

5. **Export Events** (if implemented):
   - Export events as a JSON or CSV file for a specific month.

## Folder Structure

```
src/
├── components/
│   ├── Calendar.js
│   ├── EventModal.js
│   ├── EventList.js
│   └── UI/ (shadcn components)
├── utils/
│   ├── calendarLogic.js
│   └── eventHelpers.js
├── App.js
├── index.js
└── styles/
    └── main.css
```

## Deployment

The project has been deployed on Vercel/Netlify. You can view the live version here:

[Live Demo](https://your-deployment-link.vercel.app/)

## How to Run Locally

To run the project locally, follow the installation instructions above.

## Known Issues and Future Improvements

- **Current Limitations**:
  - No support for recurring events.
  - Drag-and-drop feature is in progress.

- **Planned Improvements**:
  - Add recurring events.
  - Optimize performance for large event data.
  - Integrate backend for multi-user support.

## Author

- **Name**: Your Name
- **GitHub**: [your-github-profile](https://github.com/your-username)
- **Email**: your-email@example.com

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Feedback

If you have any feedback, feel free to open an issue or reach out via email.

