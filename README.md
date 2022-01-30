# Maengelmelder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

DEMO: [Heroku](https://maengelmelder-de.herokuapp.com/)

# Table of Contents

- [Maengelmelder](#maengelmelder)
- [Table of Contents](#table-of-contents)
  - [Design Choices](#design-choices)
    - [Project Structure](#project-structure)
    - [Components](#components)
    - [Model](#model)
    - [Pages](#pages)
    - [Services](#services)
  - [Mockup](#mockup)
- [Development server](#development-server)
- [Running unit tests](#running-unit-tests)


## Design Choices



### Project Structure

```text
src/app/
├── components
├── models
├── pages
├── services
```

### Components

The `components` folder contains reusable parts such as `ReportCardComponent`.

The `ReportCardComponent` implements the function to `save` reports, in which the user can naviagate to the `SavedReportsComponent` to inspect the list of saved reports. Additioanlly, the `ReportCardComponent` implements the `remove` function, which in return removes the report from `localStorage`.

### Model

The `models` folder contains interfaces, which define structures such as reports.

### Pages

The `pages` folder contains all components, which are navigatable as a page.

The project contains two pages, the `AllReportsComponent`-Page and the `SavedReportsComponent`-Page.

`AllReportsComponent` lists all reports retreived from the API. This component uses the `ReportCardComponent` to list each report.

`SavedReportsPage` lists only the saved reports by the uer. This component uses again `ReportCardComponent` to list saved reports.

### Services

The `services` folder contains functionality such as communicating with the API or storing data in `localStorage`. It contains two services, `StorageService` and `ReportService`.

## Mockup

Mockup created with [Figma](https://www.figma.com/).
![Mockup](src/assets/images/Skizzen.png)
# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).