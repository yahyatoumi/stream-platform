# Stream - Film & Video Streaming Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2.25-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive streaming platform UI built with Next.js and Tailwind CSS. Stream delivers a complete entertainment experience with a sleek interface inspired by premium streaming services.


## ✨ Features

- 🎬 **Content Discovery** - Intuitive browsing with personalized recommendations
- 🔐 **Authentication** - Secure sign-up and sign-in flows with multi-factor options
- 📱 **Responsive Design** - Perfectly optimized for mobile, tablet, and desktop
- 🌓 **Dark Theme** - Sleek dark UI with purple accents for comfortable viewing
- 🎨 **Modern UI** - Built with shadcn/ui components for a polished experience
- 💳 **Subscription Management** - Plan selection and payment processing
- 📺 **Video Player** - Custom player with advanced controls and features
- 👤 **User Profiles** - Support for multiple profiles with personalized content
- 🔍 **Search** - Powerful search functionality with filters and suggestions
- 📝 **Watchlist** - Save content to watch later with custom collections

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI**: [React 18](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Context API

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yahyatoumi/stearm-platform.git
   cd stream-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   # Add other environment variables as needed
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
stream-platform/
├── app/                    # Next.js App Router
│   ├── dashboard/          # Dashboard pages
│   │   ├── subscribe/      # Subscription management
│   │   ├── watch/          # Video watching pages
│   │   └── page.tsx        # Main dashboard
│   ├── payment/            # Payment flow
│   │   ├── finish/         # Payment confirmation
│   │   ├── package/        # Plan selection
│   ├── sign-in/            # Authentication
│   ├── sign-up/            # User registration
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   └── theme-provider.tsx  # Theme context provider
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## 🔧 Configuration

### Tailwind Configuration

The project uses Tailwind CSS with custom configurations for colors, animations, and components. You can modify the theme in `tailwind.config.ts`.

### Styling

The main theme colors are defined in:
- `app/globals.css` - Contains CSS variables for the theme
- `tailwind.config.ts` - Contains Tailwind configuration

The primary color is a purple shade (`hsl(272 67% 47%)`), which can be modified in the CSS variables.

### Component Customization

All shadcn/ui components can be customized in the `components/ui` directory. See the [shadcn/ui documentation](https://ui.shadcn.com/) for more information.

## 📋 Pages Overview

- **Home**: Landing page with featured content and call-to-action
- **Sign Up/Sign In**: User authentication flows
- **Payment**: Subscription plan selection and payment confirmation
- **Dashboard**: Main content browsing interface
- **Watch**: Movie/show details and video player
- **Subscribe**: Subscription management

## 🔌 Adding Content

To add real content, you would typically:
1. Connect to a movie/show database API
2. Implement authentication with a service like NextAuth.js
3. Set up a backend for user management and subscriptions

## 📬 Contact

Yahya Toumi  - yahyatoumi555@gmail.com

Project Link: [https://github.com/ytoumi/stream-platform](https://github.com/ytoumi/stream-platform)

---

Built by Yahya Toumi
