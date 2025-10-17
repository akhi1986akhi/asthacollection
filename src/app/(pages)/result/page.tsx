'use client';

import { useEffect, useState, MouseEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserData, LotteryResult, WinningNumbersMap } from '@/types';

// Mock winning numbers database
const WINNING_NUMBERS: WinningNumbersMap = {
  'L123456': { prize: '₹10,000', drawDate: '2024-01-15' },
  'L789012': { prize: '₹50,000', drawDate: '2024-01-10' },
  'L345678': { prize: '₹1,00,000', drawDate: '2024-01-05' },
  'L901234': { prize: '₹5,00,000', drawDate: '2024-01-01' },
  'WIN500': { prize: '₹500', drawDate: '2024-01-20' },
  'WIN1000': { prize: '₹1,000', drawDate: '2024-01-20' }
};

export default function Result() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [result, setResult] = useState<LotteryResult | null>(null);

  const serialNo = searchParams.get('serial');

  useEffect(() => {
    // Get user data from sessionStorage
    const storedData = sessionStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      router.push('/');
      return;
    }

    if (!serialNo) {
      router.push('/check-lottery');
      return;
    }

    // Check if serial number is a winner
    const winningInfo = WINNING_NUMBERS[serialNo.toUpperCase()];
    if (winningInfo) {
      setResult({
        isWinner: true,
        message: 'Congratulations! You Won!',
        prize: winningInfo.prize,
        drawDate: winningInfo.drawDate,
        serialNo: serialNo.toUpperCase()
      });
    } else {
      setResult({
        isWinner: false,
        message: 'Better Luck Next Time!',
        serialNo: serialNo.toUpperCase()
      });
    }
  }, [serialNo, router]);

  const handleCheckAnother = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/check-lottery');
  };

  const handleNewUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sessionStorage.removeItem('userData');
    router.push('/');
  };

  const primaryButtonStyle = {
    width: '100%',
    padding: '15px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s'
  };

  const secondaryButtonStyle = {
    width: '100%',
    padding: '10px',
    background: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  if (!userData || !result) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        color: 'white',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#333', marginBottom: '5px' }}>{userData.fullName}</h2>
          <p style={{ color: '#666', margin: 0 }}>Serial: {result.serialNo}</p>
        </div>

        {result.isWinner ? (
          <div style={{
            background: 'linear-gradient(135deg, #4CAF50, #45a049)',
            color: 'white',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎉</div>
            <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>{result.message}</h3>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
              Prize: {result.prize}
            </div>
            <div style={{ fontSize: '16px' }}>
              Draw Date: {new Date(result.drawDate!).toLocaleDateString()}
            </div>
          </div>
        ) : (
          <div style={{
            background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
            color: 'white',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>😔</div>
            <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>{result.message}</h3>
            <p style={{ fontSize: '16px', opacity: 0.9 }}>
              Don't worry! Try again with another lottery ticket.
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <button
            onClick={handleCheckAnother}
            style={primaryButtonStyle}
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Check Another Lottery
          </button>

          <button
            onClick={handleNewUser}
            style={secondaryButtonStyle}
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#667eea';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#667eea';
            }}
          >
            New User
          </button>
        </div>
      </div>
    </div>
  );
}