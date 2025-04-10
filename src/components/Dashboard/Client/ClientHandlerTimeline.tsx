'use client';
import React from 'react'

type Handler = {
  year: number;
  name: string;
};

const handlers: Handler[] = [
  { year: 2022, name: 'Mr. A' },
  { year: 2023, name: 'Mr. B' },
  { year: 2024, name: 'Mr. C' },
  { year: 2025, name: 'Mr. D' },
];

const ClientHandlerTimeline: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-12 w-full">
      <div className="flex items-center justify-center relative w-full max-w-4xl">
        {handlers
          .filter(handler => handler.year >= new Date().getFullYear() - 9) // Only last 10 years including current year
          .slice(-10)
          .map((handler, index, array) => (
            <div key={handler.year} className="flex flex-col items-center relative w-1/3">
              {/* Year Circle */}
              <div
                className="rounded-full h-9 w-9 bg-blue-500 text-white flex items-center justify-center text-xs font-bold z-10"
                title={handler.name} // Tooltip with person's name
              >
                {handler.year}
              </div>

              {/* Line */}
              {index !== array.length - 1 && (
                <div className={`absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 z-0`} />
              )}

              {/* Final name if last item */}
              {index === array.length - 1 && (
                <div className="absolute top-[-24px] text-sm text-gray-700 font-medium">
                  {handler.name}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClientHandlerTimeline;