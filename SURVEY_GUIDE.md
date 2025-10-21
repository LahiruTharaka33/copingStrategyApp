# Survey App - Developer Guide

## ✅ What's Been Built

The personality assessment survey foundation is **READY**. Here's what's implemented:

### 📁 File Structure
```
app/
├── page.tsx                          (Home page with "Start" button)
├── survey/
│   ├── page.tsx                      (Main survey logic)
│   ├── types/
│   │   └── survey.ts                 (TypeScript interfaces)
│   ├── data/
│   │   └── questions.ts              (YOUR QUESTIONS GO HERE)
│   └── components/
│       ├── WelcomeScreen.tsx         (Intro screen)
│       ├── QuestionCard.tsx          (Displays questions)
│       ├── ProgressBar.tsx           (Shows progress)
│       ├── LikertScale.tsx           (Rating questions)
│       ├── MultipleChoice.tsx        (Choice questions)
│       ├── TextInput.tsx             (Text questions)
│       ├── NavigationButtons.tsx     (Back/Next buttons)
│       └── ResultsScreen.tsx         (Shows personality scores)
```

### 🎨 Supported Question Types

1. **likert-5** - 5-point scale (Strongly Disagree → Strongly Agree)
2. **likert-7** - 7-point scale
3. **multiple-choice** - Single selection
4. **yes-no** - Binary choice
5. **text-input** - Short text answer
6. **text-area** - Long text answer
7. **slider** - Numeric range

### ✨ Features Implemented

✅ Mobile-first responsive design  
✅ Progress bar with percentage  
✅ Back/Next navigation  
✅ Auto-save to localStorage (progress persists)  
✅ Answer validation (can't proceed without answering)  
✅ Smooth transitions  
✅ Results screen with personality scores  
✅ Welcome screen with instructions  

---

## 📝 How to Add Your Questions

### Step 1: Open the questions file
`app/survey/data/questions.ts`

### Step 2: Add your questions to the array

#### Example 1: Likert Scale Question (5-point)
```typescript
{
  id: 'q1',
  type: 'likert-5',
  text: 'I enjoy trying new activities and experiences',
  dimension: 'openness',
  required: true,
}
```

#### Example 2: Custom Options
```typescript
{
  id: 'q2',
  type: 'multiple-choice',
  text: 'What is your primary sport?',
  options: [
    { value: 'karate', label: 'Karate' },
    { value: 'taekwondo', label: 'Taekwondo' },
    { value: 'wrestling', label: 'Wrestling' },
    { value: 'judo', label: 'Judo' },
  ],
  required: true,
}
```

#### Example 3: Yes/No Question
```typescript
{
  id: 'q3',
  type: 'yes-no',
  text: 'Do you compete at national level?',
  required: true,
}
```

#### Example 4: Text Input
```typescript
{
  id: 'q4',
  type: 'text-input',
  text: 'What motivates you to compete?',
  required: false,
}
```

#### Example 5: Slider
```typescript
{
  id: 'q5',
  type: 'slider',
  text: 'How confident do you feel before competitions?',
  min: 0,
  max: 100,
  required: true,
}
```

#### Example 6: Reversed Scoring
```typescript
{
  id: 'q6',
  type: 'likert-5',
  text: 'I prefer routine over variety',
  dimension: 'openness',
  reversed: true,  // This will be scored inversely
  required: true,
}
```

---

## 🚀 How to Run the App

1. **Start the development server:**
```bash
npm run dev
```

2. **Open in browser:**
```
http://localhost:3000
```

3. **Navigate to survey:**
- Click "Start Personality Assessment" on home page
- Or go directly to: http://localhost:3000/survey

---

## 📱 Mobile Testing

Test on different screen sizes:
- iPhone SE: 375px
- iPhone 12/13: 390px
- iPhone 14 Pro Max: 430px
- Android: 360px - 412px

Use browser DevTools (F12) → Device Toolbar

---

## 🔧 How to Customize

### Change Colors
Edit the Tailwind classes in components:
- Primary blue: `bg-blue-600` → `bg-[your-color]`
- Text: `text-gray-900`
- Borders: `border-gray-200`

### Add More Question Types
1. Create new component in `components/`
2. Add type to `types/survey.ts`
3. Import in `QuestionCard.tsx`
4. Add case in switch statement

### Modify Progress Saving
Edit `app/survey/page.tsx`:
- `useEffect` hooks handle localStorage
- Change key: `surveyProgress`

---

## 📊 Scoring Logic

Located in `app/survey/page.tsx` → `calculateScores()` function

Current implementation:
- Calculates average for each Big Five dimension
- You can customize based on your research methodology
- Handles reversed items (if `reversed: true`)

---

## 🎯 Next Steps

### When You Provide Questions:
1. Tell me the question text
2. Specify the type (likert-5, multiple-choice, etc.)
3. If custom options, provide them
4. Specify which personality dimension it measures
5. Tell me if it's reverse-scored

### Example Format You Can Use:
```
Question 1:
- Text: "I am always prepared"
- Type: likert-5
- Dimension: conscientiousness
- Reversed: false
```

I'll add them to the questions file for you!

---

## 📦 What's Next After Survey?

Phase 2: Anxiety Assessment (CSAI-2)
Phase 3: Coping Strategy Recommendations
Phase 4: Progress Tracking Dashboard

---

## 🐛 Troubleshooting

**Q: Progress not saving?**  
A: Check browser localStorage isn't disabled

**Q: Questions not showing?**  
A: Make sure questions array in `questions.ts` isn't empty

**Q: Styling looks wrong?**  
A: Ensure Tailwind is running (`npm run dev`)

---

Ready for your questions! 🎉






