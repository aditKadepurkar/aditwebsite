---
title: SpeechHacks
date: 2024-12-30
author: Adit Kadepurkar, Matthew Xu
post_id: 2
---

## SpeechHacks
The majority of SpeechHacks was made during a hackathon in ~48 hours. We made some refinements after the fact, but the core project was done during the hackathon. 

The prompt for the hackathon was self improvement and so our idea was an application that helps people improve their speaking prowess. Speaking is such an important part of our daily lives and so it is imperative that you speak clearly and concisely. We wanted to create a speech coach that would help give feedback on users speech in two ways:
1. Via a converation with a voice bot. We would have the users hold a natural conversation with the voice bot and once the conversation is over, review what was said.
2. Via a pre recorded speech or conversation. Users could upload something and our agent would analyze and give feedback on the speech.


### Frontend (React Native)
The mobile application is built with React Native for cross-platform compatibility:

- **Audio Recording**: Uses mic on users device to capture audio
- **File Upload**: Supports uploading pre-recorded audio in multiple formats
- **Progress Tracking**: Displays grammar corrections and confidence metrics
- **Cross-Platform**: Works on both iOS and Android devices

### Backend (Django)
A Django server handles all speech processing and AI interactions:

#### Key Libraries
- **Speech Recognition**: OpenAI Whisper (via HuggingFace transformers)
- **Grammar Correction**: T5-based model (vennify/t5-base-grammar-correction)
- **Audio Processing**: pydub for format conversion
- **AI Conversation**: OpenAI GPT-3.5 API
- **Audio Generation**: OpenAI TTS API
#### RESTful API

The backend exposes several RESTful API endpoints for interaction with the frontend:

1. **POST /api/upload**
    - **Description**: Uploads an audio file for analysis.
    - **Request Body**: Multipart/form-data with audio file.
    - **Response**: JSON with file ID and status.

2. **GET /api/analyze/{file_id}**
    - **Description**: Retrieves analysis results for a given file.
    - **Request Params**: `file_id` - ID of the uploaded audio file.
    - **Response**: JSON with transcription, grammar corrections, and confidence metrics.

3. **POST /api/conversation**
    - **Description**: Initiates or continues a conversation with the voice bot.
    - **Request Body**: JSON with user input and conversation context.
    - **Response**: JSON with bot response and updated context.

4. **GET /api/progress/{user_id}**
    - **Description**: Retrieves progress tracking data for a user.
    - **Request Params**: `user_id` - ID of the user.
    - **Response**: JSON with historical data on grammar corrections and confidence metrics.

5. **POST /api/feedback**
    - **Description**: Submits user feedback on the application.
    - **Request Body**: JSON with user feedback details.
    - **Response**: JSON with status and acknowledgment.

These endpoints ensure smooth communication between the frontend and backend, enabling real-time speech analysis and feedback.

#### Core Features
1. **Speech Analysis Pipeline**
   - Audio file conversion to WAV
   - Speech-to-text transcription
   - Grammar error detection
   - Confidence scoring (tracking filler words)
   - Sentence by sentence corrections

2. **Interactive Conversation**
   - Maintains conversation context
   - Natural responses via GPT-3.5
   - Random conversation starters
   - Context-aware replies

3. **Feedback Generation**
   - Detailed grammar corrections
   - Confidence assessment
   - Speaking style suggestions
   - Audio response generation
   - Well tuned prompt to help stay in distribution

4. **File Handling**
   - Supports multiple audio formats (MP3, WAV, OGG, FLAC, AAC)
   - Secure file storage
   - Format conversion
   - CORS-enabled endpoints

The system uses a JSON-based storage system for maintaining conversation history and user data, with proper error handling and input validation throughout the pipeline.

Lots of improvements are possible here I think and some features are not as refined as they sound as rigorous testing was not possible in just 48 hours
