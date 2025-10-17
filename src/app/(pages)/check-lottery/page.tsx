'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { UserData } from '@/types';

export default function CheckLottery() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [serialNo, setSerialNo] = useState<string>('');

  useEffect(() => {
    // Get user data from sessionStorage
    const storedData = sessionStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (serialNo.trim()) {
      // Navigate to result page with serial number
      router.push(`/result?serial=${encodeURIComponent(serialNo)}`);
    }
  };

  const handleSerialNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSerialNo(e.target.value);
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '18px',
    boxSizing: 'border-box' as const,
    textAlign: 'center' as const,
    letterSpacing: '2px'
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
    marginTop: '15px',
    transition: 'all 0.2s'
  };

  if (!userData) {
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
        maxWidth: '400px'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#333', marginBottom: '5px' }}>Welcome, {userData.fullName}!</h2>
          <p style={{ color: '#666', margin: 0 }}>Contact: {userData.contactNo}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '10px', 
              fontWeight: 'bold',
              color: '#555',
              fontSize: '18px'
            }}>
              Enter Lottery Serial Number:
            </label>
            <input
              type="text"
              value={serialNo}
              onChange={handleSerialNoChange}
              required
              style={inputStyle}
              placeholder="e.g., L123456"
            />
          </div>

          <button
            type="submit"
            style={primaryButtonStyle}
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Check Winning Status
          </button>
        </form>

        <button
          onClick={() => router.push('/')}
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
          Back to User Info
        </button>
      </div>
    </div>
  );
}