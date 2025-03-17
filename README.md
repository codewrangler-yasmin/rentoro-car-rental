# Rentoro - Car Rental System

## Purpose
The Car Rental System is a feature-rich, user-centric platform that allows users to manage car rentals seamlessly. The platform enables users to add, update, and delete cars for rental, search and book cars based on availability, and review cars they have rented. The system provides real-time updates on car availability and booking statuses.

## Live URL  
[Live Demo](https://rentoro-car-rental.web.app/)  


## Key Features
1. **User Authentication**:
   - Secure sign-up, login, and logout functionality using Firebase Authentication & JWT.

2. **Car Management**:
   - Users can add, update, and delete car listings with details like name, brand, type, price, availability, and images.

3. **Search and Booking**:
   - Search cars with filters like price range, brand, type, and availability.
   - Book cars for specific date ranges with real-time updates on availability.

4. **Reviews**:
   - Users can leave reviews and ratings for cars they have rented.
   - Display reviews with user names and timestamps.

5. **Real-Time Updates**:
   - Real-time updates on car availability and booking statuses using WebSockets or Firebase.

6. **Interactive Animations**:
   - Enhance user experience with **Lottie React** animations, providing smooth, engaging visuals during interactions like car bookings and transitions.

7. **Image Carousels**:
   - Users can view car images in an interactive carousel with **Swiper Slider**, allowing smooth and touch-friendly browsing of car galleries.

## Technologies Used
### Frontend
- **HTML5**, **CSS3**, **JavaScript**
- **React.js**: For building the user interface.
- **React Router**: For routing and navigation.
- **TailwindCSS** or **Material-UI**: For styling and design consistency.
- **Lottie React**: For integrating engaging animations.
- **Swiper Slider**: For creating touch-friendly image carousels.

### Backend
- **Node.js**: Server-side runtime.
- **Express.js**: Framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing users, cars, bookings, and reviews.
- **JWT**: For secure authentication and session management.

### Additional Tools
- **Firebase Authentication**: For user authentication.
- **Cloud Storage**: To store and retrieve car images.
- **Cloud Functions**: For backend operations like booking validations.

### Real-Time Updates
- **Firebase Firestore** or **WebSockets**: For synchronizing booking and availability changes across the platform.
