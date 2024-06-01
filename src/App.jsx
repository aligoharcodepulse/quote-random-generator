import { useState } from 'react'
import './App.css'

function App() {
  const [randomQuote,setRandomQuote]= useState('Click To Generate Random Quote');
  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
    "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Whoever is happy will make others happy too. - Anne Frank",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King, Jr.",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "In this life we cannot do great things. We can only do small things with great love. - Mother Teresa",
    "Only a life lived for others is a life worthwhile. - Albert Einstein",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "May you live all the days of your life. - Jonathan Swift",
    "Life itself is the most wonderful fairy tale. - Hans Christian Andersen",
    "Do not let making a living prevent you from making a life. - John Wooden",
    "Life is ours to be spent, not to be saved. - D. H. Lawrence",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe",
    "Life is a long lesson in humility. - James M. Barrie",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Love the life you live. Live the life you love. - Bob Marley",
    "Life is made of ever so many partings welded together. - Charles Dickens",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Money and success don’t change people; they merely amplify what is already there. - Will Smith",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Not how long, but how well you have lived is the main thing. - Seneca",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it. - Henry Ford"
];
function handlerandomQuote(){
  const randomIndex = Math.floor(Math.random()*quotes.length);
  setRandomQuote(quotes[randomIndex]);
}

  return (
    <>
    <div className='container'>
    <h1>Random Quote Generator</h1>
    <h2>{randomQuote}</h2>
    <button onClick={handlerandomQuote}>Generate Quote</button>
    </div>
    </>
  )
}

export default App
