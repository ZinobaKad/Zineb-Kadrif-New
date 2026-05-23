
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Sparkles, Trash2, X, MousePointer2 } from 'lucide-react';

interface DrawingCanvasProps {
  isActive: boolean;
  onToggle: () => void;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ isActive, onToggle }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#F7D600');

  const colors = [
    { name: 'Yellow', value: '#F7D600' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Black', value: '#000000' },
    { name: 'Cyan', value: '#00F0FF' },
    { name: 'Pink', value: '#FF00FF' },
  ];

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color;
      contextRef.current.shadowColor = color;
    }
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to match window
    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * 2; // High DPI
      canvas.height = innerHeight * 2;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;

      const context = canvas.getContext('2d');
      if (context) {
        context.scale(2, 2);
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = '#F7D600'; // Brand yellow
        context.lineWidth = 5;
        context.shadowBlur = 15;
        context.shadowColor = '#F7D600';
        context.globalAlpha = 0.8;
        contextRef.current = context;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const startDrawing = useCallback(({ nativeEvent }: React.MouseEvent | React.TouchEvent) => {
    if (!isActive) return;
    
    let clientX, clientY;
    if ('touches' in nativeEvent) {
      clientX = nativeEvent.touches[0].clientX;
      clientY = nativeEvent.touches[0].clientY;
    } else {
      clientX = nativeEvent.clientX;
      clientY = nativeEvent.clientY;
    }

    contextRef.current?.beginPath();
    contextRef.current?.moveTo(clientX, clientY);
    setIsDrawing(true);
  }, [isActive]);

  const finishDrawing = useCallback(() => {
    contextRef.current?.closePath();
    setIsDrawing(false);
  }, []);

  const draw = useCallback(({ nativeEvent }: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !isActive) return;

    let clientX, clientY;
    if ('touches' in nativeEvent) {
      clientX = nativeEvent.touches[0].clientX;
      clientY = nativeEvent.touches[0].clientY;
    } else {
      clientX = nativeEvent.clientX;
      clientY = nativeEvent.clientY;
    }

    contextRef.current?.lineTo(clientX, clientY);
    contextRef.current?.stroke();
  }, [isDrawing, isActive]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      {/* The Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={finishDrawing}
        onTouchMove={draw}
        className={`fixed inset-0 z-[9990] transition-opacity duration-300 ${
          isActive ? 'pointer-events-auto cursor-crosshair opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Control Buttons */}
      <div className="fixed top-24 right-6 flex flex-col gap-3 z-[10000]">
        <button
          onClick={onToggle}
          title={isActive ? "Disable Drawing" : "Enable Drawing"}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(247,214,0,0.3)] group ${
            isActive 
              ? 'bg-brand-yellow text-black rotate-12 scale-110 shadow-[0_0_30px_rgba(247,214,0,0.6)]' 
              : 'bg-black text-brand-yellow hover:scale-110 hover:shadow-[0_0_25px_rgba(247,214,0,0.4)]'
          }`}
        >
          {isActive ? (
            <Sparkles size={24} className="animate-pulse" />
          ) : (
            <div className="flex flex-col items-center">
              <Sparkles size={20} className="group-hover:animate-spin" />
              <span className="text-[9px] font-black uppercase tracking-widest mt-1">Play</span>
            </div>
          )}
        </button>

        {isActive && (
          <div className="flex flex-col gap-2 py-2 animate-in fade-in slide-in-from-right-4 duration-500">
            {colors.map((c) => (
              <button
                key={c.value}
                onClick={() => setColor(c.value)}
                title={c.name}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                  color === c.value ? 'scale-125 border-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'border-transparent hover:scale-110'
                }`}
                style={{ backgroundColor: c.value }}
              />
            ))}
            <div className="h-px bg-gray-200 my-1 w-8 mx-auto" />
            <button
              onClick={clearCanvas}
              title="Clear Canvas"
              className="w-10 h-10 rounded-full bg-white text-black border-2 border-black flex items-center justify-center transition-all hover:bg-black hover:text-brand-yellow shadow-lg"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Mode Indicator Overlay */}
      {isActive && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[10000] bg-black text-brand-yellow px-6 py-3 rounded-full text-[10px] uppercase font-black tracking-[0.3em] shadow-2xl animate-bounce border-2 border-brand-yellow pointer-events-none backdrop-blur-md">
          ✨ Magical Pen Active • Draw Everywhere! ✨
        </div>
      )}
    </>
  );
};

export default DrawingCanvas;
