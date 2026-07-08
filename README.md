# 👔 AI Fashion Outfit Recommendation System


An AI-powered Fashion Assistant that understands natural language queries and recommends complete outfit combinations using Gemini AI, MongoDB, and a custom compatibility scoring engine.

---

##  Features

✅ Conversational Fashion Assistant

✅ Gemini AI Intent Extraction

✅ User-Aware Recommendations

✅ Outfit Compatibility Scoring

✅ Complete Outfit Suggestions

✅ Explainable Recommendations

✅ Product Image Visualization

✅ Responsive MERN Stack UI

---

##  Problem Statement

Users should be able to interact naturally with the system.

### Example Queries

```text
I am a 22 year old male attending a wedding

Suggest a casual vacation outfit

Recommend a party outfit for women

Need a formal office outfit
```

The system understands the request and recommends:

* Topwear
* Bottomwear
* Footwear
* Accessories

along with compatibility score and reasoning.

---

#  System Architecture

```text
                USER QUERY
                     │
                     ▼
        ┌─────────────────────┐
        │    React Frontend   │
        └─────────────────────┘
                     │
                     ▼
        ┌─────────────────────┐
        │   Express Backend   │
        └─────────────────────┘
                     │
                     ▼
        ┌─────────────────────┐
        │ Gemini AI Intent    │
        │ Extraction          │
        └─────────────────────┘
                     │
                     ▼
        Structured User Profile

       Gender | Occasion | Style
                     │
                     ▼
        ┌─────────────────────┐
        │ Recommendation      │
        │ Engine              │
        └─────────────────────┘
                     │
                     ▼
        ┌─────────────────────┐
        │ MongoDB Outfit DB   │
        └─────────────────────┘
                     │
                     ▼
          Compatibility Scoring
                     │
                     ▼
            Top Ranked Outfits
                     │
                     ▼
           Explainable Results
                     │
                     ▼
              React UI Output
```

---

#  Technical Approach

## 1. Dataset Analysis

Performed Exploratory Data Analysis (EDA) on:

### Products Dataset

Contains:

* Product Name
* Brand
* Gender
* Category
* Wear Type
* Occasion
* Product Images

### Outfits Dataset

Contains:

* Hero Product
* Bottomwear
* Layers
* Footwear
* Accessories
* Palette
* Total Price
* Stylist Rationale

---

## 2. Conversational Fashion Assistant

Gemini AI converts natural language into structured intent.

### Input

```text
I am a 22 year old male attending a wedding
```

### Extracted Intent

```json
{
  "gender": "men",
  "occasion": "wedding",
  "wear_type": "ethnic",
  "budget": null
}
```

This allows users to interact naturally without selecting filters manually.

---

## 3. Outfit Compatibility Engine

The recommendation engine ranks outfits using compatibility scoring.

### Scoring Logic

| Feature         | Score |
| --------------- | ----- |
| Gender Match    | +30   |
| Occasion Match  | +30   |
| Wear Type Match | +20   |
| Budget Match    | +20   |

### Example

Input:

```text
Male
Wedding
Ethnic
```

Output:

```text
Ivory Sherwani
Traditional Jutti
Titan Watch
```

Compatibility Score:

```text
100
```

---

## 4. User-Aware Recommendations

Recommendations adapt to:

* Gender
* Occasion
* Wear Type
* Budget

Example:

```text
Male
Wedding
Ethnic
```

Produces different recommendations than:

```text
Female
Party
Western
```

---

## 5. Explainable AI

Each recommendation includes reasoning.

### Example

```text
Ivory sherwani with a maroon dupatta and brown mojaris creates a traditional wedding-ready appearance while maintaining a warm neutral color palette.
```

This increases transparency and user trust.

---

#  Tech Stack

## Frontend

* React.js
* Axios

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## AI Layer

* Google Gemini API

## Data Processing

* Python
* Pandas
* Jupyter Notebook

---

#  Project Structure

```text
AI-Fashion-Recommendation-System

│
├── Client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│
├── Server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── app.js
│
├── images
│
├── notebooks
│
└── README.md
```

---

#  Sample Recommendation

### User Query

```text
I am a 22 year old male attending a wedding
```

### AI Understood

```text
Gender: Men
Occasion: Wedding
Style: Ethnic
```

### Recommended Outfit

```text
Theme:
Ivory Sherwani

Footwear:
Traditional Jutti

Accessory:
Titan Watch

Compatibility Score:
100
```

---

#  Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Backend Setup

```bash
cd Server

npm install

npm run dev
```

## Frontend Setup

```bash
cd Client

npm install

npm run dev
```

---

#  Environment Variables

Create `.env`

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

#  Demo Video

The demo covers:

* Dataset Understanding
* System Architecture
* Recommendation Engine
* Gemini Integration
* Compatibility Scoring
* Explainability
* Live Demonstration

---

#  Challenges Faced

* Intent extraction from natural language
* Recommendation ranking design
* MongoDB integration
* Outfit image rendering
* Explainable recommendation generation

---

#  Future Improvements

* FashionCLIP Integration
* CLIP Embeddings
* Vector Search using FAISS
* Multi-Modal Retrieval
* Image Similarity Search
* Personalized User Profiles
* Graph-Based Fashion Recommendations
* RAG-based Fashion Assistant

---

#  Author

**Venkata Sarma Vedam**

B.Tech CSE (Data Science)

AI & Machine Learning Enthusiast
