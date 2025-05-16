"use client";
import React, { useState, useRef, useEffect } from "react";

const OWNER_SECRET = "adityasecret";

const defaultNote = `🚀 Working on a new portfolio feature!
• Portfolio redesign in progress
• Adding new projects soon!
`;

const FloatingStickyNote = () => {
  const [visible, setVisible] = useState(true);
  const [editing, setEditing] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [note, setNote] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("stickyNote") || defaultNote;
    }
    return defaultNote;
  });
  const [secret, setSecret] = useState("");
  const [editValue, setEditValue] = useState(note);

  // Drag state
  // Start at right bottom: x = 0, y = 0, but we use translate for smoothness
  const [position, setPosition] = useState<{ x: number; y: number }>(() => {
    // Default offset from right and bottom
    return { x: 0, y: 0 };
  });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  // Hydration fix
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Paper-like very light yellow grid background for light mode, solid for dark
 let isDark = false;
  if (mounted && typeof window !== "undefined" && window.matchMedia) {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  // Use a more saturated yellow for the sticky note
  const bgColor = isDark ? "#f3f4f6" : "#FDE047"; // Tailwind yellow-300
  const borderColor = isDark ? "#d1d5db" : "#facc15"; // Tailwind yellow-400
  const textColor = isDark ? "#1e293b" : "#7c4700";
  const pinBg = "radial-gradient(circle at 30% 30%, #fde047 70%, #fbbf24 100%)";
  const pinBorder = "#fbbf24";
  const gridBg = isDark
    ? bgColor
    : `repeating-linear-gradient(0deg, #FDE047, #FDE047 23px, #bae6fd 24px, #FDE047 25px),
       repeating-linear-gradient(90deg, #FDE047, #FDE047 23px, #bae6fd 24px, #FDE047 25px)`;


  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const onMouseUp = () => {
    dragging.current = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    const touch = e.touches[0];
    offset.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!dragging.current) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - offset.current.x,
      y: touch.clientY - offset.current.y,
    });
  };

  const onTouchEnd = () => {
    dragging.current = false;
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
  };

  // Save note to localStorage
  const saveNote = () => {
    setNote(editValue);
    localStorage.setItem("stickyNote", editValue);
    setEditing(false);
    setShowSecret(false);
  };

  // Only you can see the edit UI if you enter the secret
  const handleSecret = (e: React.FormEvent) => {
    e.preventDefault();
    if (secret === OWNER_SECRET) {
      setEditing(true);
      setSecret("");
    } else {
      alert("Wrong secret!");
    }
  };

  if (!mounted || !visible) return null;

  return (
    <div
      className="fixed z-[100] max-w-xs"
      style={{
        right: 32,
        bottom: 32,
        // Use transform for smooth dragging, default at right-bottom
        transform: `translate(${position.x}px, ${position.y}px) rotate(-2deg)`,
        cursor: "grab",
        filter: "drop-shadow(4px 8px 12px rgba(0,0,0,0.18))",
        userSelect: "none",
        transition: dragging.current ? "none" : "box-shadow 0.2s",
      }}
      onDoubleClick={() => setShowSecret(true)}
      title="Double-click to edit (owner only)"
    >
      {/* Pin */}
      <div
        style={{
          position: "absolute",
          top: "-18px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 101,
        }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            background: pinBg,
            borderRadius: "50%",
            border: `2px solid ${pinBorder}`,
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "#fffde4",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <div
        className="relative shadow-lg p-4 flex flex-col gap-2"
        style={{
          minHeight: "120px",
          minWidth: "220px",
          fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
          boxShadow:
            "0 8px 24px 0 rgba(0,0,0,0.10), 0 1.5px 0 #fef08a inset, 0 -8px 24px 0 #f5f5f4 inset",
          background: gridBg,
          border: `2px solid ${borderColor}`,
          borderRadius: "18px",
        }}
      >
        <div
          className="flex justify-between items-center mb-1"
          style={{ cursor: "grab" }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <span className="font-bold" style={{ letterSpacing: "0.5px", color: textColor }}>
            Latest Update
          </span>
          <button
            className="hover:text-red-500 text-lg font-bold ml-2"
            onClick={e => {
              e.stopPropagation();
              setVisible(false);
            }}
            aria-label="Close"
            style={{
              background: "none",
              border: "none",
              fontFamily: "inherit",
              fontSize: "1.2em",
              lineHeight: "1",
              cursor: "pointer",
              color: textColor,
            }}
          >
            ×
          </button>
        </div>
        {editing ? (
          <>
            <textarea
              className="w-full rounded p-2 text-sm border"
              rows={3}
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              style={{
                fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
                background: bgColor,
                color: textColor,
                borderColor: borderColor,
                resize: "vertical",
              }}
            />
            <button
              className="mt-2 px-3 py-1 font-bold rounded hover:bg-yellow-100"
              onClick={saveNote}
              style={{
                fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
                background: borderColor,
                color: textColor,
              }}
            >
              Save
            </button>
          </>
        ) : (
          <div
            className="text-sm whitespace-pre-line"
            style={{
              fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
              fontSize: "1.08em",
              letterSpacing: "0.1px",
              color: textColor,
            }}
          >
            {note}
          </div>
        )}
        {/* Owner edit trigger, hidden unless double-clicked */}
        {!editing && showSecret && (
          <form onSubmit={handleSecret} className="mt-2 flex gap-2">
            <input
              type="password"
              placeholder="Owner code"
              className="w-24 rounded px-2 py-1 text-xs border"
              value={secret}
              onChange={e => setSecret(e.target.value)}
              style={{
                fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
                background: bgColor,
                color: textColor,
                borderColor: borderColor,
              }}
            />
            <button
              type="submit"
              className="px-2 py-1 rounded text-xs font-bold hover:bg-yellow-100"
              style={{
                fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
                background: borderColor,
                color: textColor,
              }}
            >
              Edit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FloatingStickyNote;