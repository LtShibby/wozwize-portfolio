import React from 'react';

const MicrochipBackground = () => {
  return (
    <>
      {/* Base black background */}
      <div
        className="fixed inset-0"
        style={{
          zIndex: -10,
          backgroundColor: '#000000',
        }}
      />

      {/* Circuit pattern overlay */}
      <div
        className="fixed inset-0"
        style={{
          zIndex: -9,
          background: `
            linear-gradient(90deg, transparent 98%, #00B5CC 99%, transparent 100%),
            linear-gradient(0deg, transparent 98%, #FFD300 99%, transparent 100%),
            linear-gradient(45deg, transparent 99.5%, #00B5CC 99.7%, transparent 100%)
          `,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px',
          opacity: 0.3,
          animation: 'circuitGlow 4s ease-in-out infinite alternate',
          boxShadow: 'inset 0 0 100px rgba(0, 181, 204, 0.1)',
        }}
      />

      {/* Glowing dots pattern */}
      <div
        className="fixed inset-0"
        style={{
          zIndex: -8,
          background: `
            radial-gradient(circle at 25% 25%, #00B5CC 1px, transparent 2px),
            radial-gradient(circle at 75% 75%, #FFD300 1px, transparent 2px)
          `,
          backgroundSize: '80px 80px, 120px 120px',
          opacity: 0.4,
          animation: 'dotPulse 3s ease-in-out infinite',
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes circuitGlow {
          0% { opacity: 0.2; filter: brightness(0.8); }
          100% { opacity: 0.4; filter: brightness(1.2); }
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </>
  );
};

export default MicrochipBackground;
