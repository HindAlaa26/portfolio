import React, { useState, useEffect, FormEvent } from 'react';
import { 
  Wifi, Battery, Signal, Plus, Trash2, CheckCircle2, 
  Database, User, ShoppingBag, BookOpen, Heart, Search, 
  Award, RotateCcw, Play, Check, ShieldCheck, Star, 
  ChevronRight, ArrowLeft, Clock, Film, Newspaper
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DeviceMockupProps {
  projectId: string;
  projectTitle: string;
  screenshot?: string;
}

export default function DeviceMockup({ projectId, projectTitle, screenshot }: DeviceMockupProps) {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currentTime, setCurrentTime] = useState<string>('09:41');

  // Interactive states for POS App
  const [posCart, setPosCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([
    { id: 1, name: "Milkshake", price: 4.5, qty: 1 },
    { id: 2, name: "Orange Juice", price: 3.5, qty: 2 }
  ]);
  const [posCategories, setPosCategories] = useState<string[]>(["Drinks", "Food", "Desserts"]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [isBackingUp, setIsBackingUp] = useState<boolean>(false);
  const [backupCompleted, setBackupCompleted] = useState<boolean>(false);

  // Interactive states for Todo App
  const [todos, setTodos] = useState<{ id: number; text: string; done: boolean }[]>([
    { id: 1, text: "Revise Bloc architecture guidelines", done: true },
    { id: 2, text: "Integrate Firebase Core SDK", done: false },
    { id: 3, text: "Refactor SQLite helper class", done: false }
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  // Interactive states for X/O Game
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [gameWinner, setGameWinner] = useState<string | null>(null);

  // Movie App interactive state
  const [watchlist, setWatchlist] = useState<number[]>([1]);

  // News App interactive state
  const [bookmarkedNews, setBookmarkedNews] = useState<number[]>([1]);

  // Sync real time inside the mockup
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 should be 12
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // POS operations
  const addToCart = (product: { name: string; price: number }) => {
    const existing = posCart.find(item => item.name === product.name);
    if (existing) {
      setPosCart(posCart.map(item => item.name === product.name ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setPosCart([...posCart, { id: Date.now(), name: product.name, price: product.price, qty: 1 }]);
    }
  };

  const removeCartItem = (id: number) => {
    setPosCart(posCart.filter(item => item.id !== id));
  };

  const handleBackup = () => {
    setIsBackingUp(true);
    setBackupCompleted(false);
    setTimeout(() => {
      setIsBackingUp(false);
      setBackupCompleted(true);
    }, 2500);
  };

  // Todo operations
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo.trim(), done: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Tic-Tac-Toe logic
  const handleCellClick = (index: number) => {
    if (board[index] || gameWinner) return;
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    
    // Check win after X move
    const winner = checkWinner(newBoard);
    if (winner) {
      setGameWinner(winner);
      return;
    }

    if (newBoard.filter(c => c === null).length === 0) {
      setGameWinner('Tie');
      return;
    }

    // Simple AI moves next after a delay
    setIsXNext(false);
    setTimeout(() => {
      const emptyIndices = newBoard.map((cell, idx) => cell === null ? idx : null).filter(idx => idx !== null) as number[];
      if (emptyIndices.length > 0) {
        // AI chooses random empty square
        const aiChoice = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        newBoard[aiChoice] = 'O';
        setBoard(newBoard);
        const winnerAi = checkWinner(newBoard);
        if (winnerAi) {
          setGameWinner(winnerAi);
        } else if (newBoard.filter(c => c === null).length === 0) {
          setGameWinner('Tie');
        }
      }
      setIsXNext(true);
    }, 600);
  };

  const checkWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameWinner(null);
    setIsXNext(true);
  };

  // Helper calculation for POS App subtotal
  const posSubtotal = posCart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="relative mx-auto w-[250px] sm:w-[260px] h-[520px] bg-slate-950 border-[6px] border-slate-800 rounded-[38px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden select-none select-none z-10 transition-all duration-300">
      
      {/* Top Notch / Dynamic Island */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-3 text-[7px] text-white/30 pointer-events-none">
        <span className="w-1.5 h-1.5 bg-slate-900 border border-slate-800 rounded-full" />
        <span className="w-4 h-1 bg-slate-900 rounded-full" />
      </div>

      {/* Status Bar */}
      <div className="h-7.5 bg-slate-950/80 backdrop-blur-md px-4 pt-2.5 flex items-center justify-between text-[8px] font-mono text-white/80 z-20 pointer-events-none select-none">
        <span className="font-semibold text-slate-300">{currentTime}</span>
        <div className="flex items-center space-x-1 text-slate-400">
          <Signal className="w-2.5 h-2.5 text-slate-300" />
          <Wifi className="w-2.5 h-2.5 text-slate-300" />
          <Battery className="w-3.5 h-3.5 text-purple-400" />
        </div>
      </div>

      {/* Screen App Canvas Wrapper */}
      <div className="flex-grow overflow-y-auto bg-slate-950 text-white relative flex flex-col text-xs scrollbar-none font-sans select-none">
        <AnimatePresence mode="wait">
          {/* 1. POINT OF SALE APP SIMULATION */}
          {projectId === 'pos-system' && (
            <motion.div 
              key="pos-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex flex-col bg-[#0b0819]"
            >
              {/* POS Title Bar */}
              <div className="bg-[#140e2b] px-3 py-2 border-b border-purple-500/10 flex items-center justify-between">
                <span className="font-bold text-purple-300 flex items-center gap-1">
                  <ShoppingBag className="w-3.5 h-3.5 text-purple-400" />
                  LitePOS v2.4
                </span>
                <span className="text-[7px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded font-mono">
                  Offline Ready
                </span>
              </div>

              {/* POS Tabs Header */}
              <div className="grid grid-cols-4 bg-[#0d091e] border-b border-white/5 text-[9px] font-semibold text-gray-400">
                <button onClick={() => setActiveTab('home')} className={`py-1.5 cursor-pointer ${activeTab === 'home' ? 'text-purple-400 border-b-2 border-purple-500 bg-white/[0.02]' : ''}`}>Sale</button>
                <button onClick={() => setActiveTab('categories')} className={`py-1.5 cursor-pointer ${activeTab === 'categories' ? 'text-purple-400 border-b-2 border-purple-500 bg-white/[0.02]' : ''}`}>Cats</button>
                <button onClick={() => setActiveTab('clients')} className={`py-1.5 cursor-pointer ${activeTab === 'clients' ? 'text-purple-400 border-b-2 border-purple-500 bg-white/[0.02]' : ''}`}>Clients</button>
                <button onClick={() => setActiveTab('backup')} className={`py-1.5 cursor-pointer ${activeTab === 'backup' ? 'text-purple-400 border-b-2 border-purple-500 bg-white/[0.02]' : ''}`}>Backup</button>
              </div>

              {/* POS Tab Content */}
              <div className="flex-grow p-2.5 flex flex-col justify-between overflow-y-auto">
                {activeTab === 'home' && (
                  <div className="space-y-2 flex-grow flex flex-col justify-between">
                    {/* Products Grid */}
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block">Available Products</span>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button onClick={() => addToCart({ name: "Milkshake", price: 4.5 })} className="bg-white/[0.02] border border-white/5 p-1.5 rounded-lg text-left hover:border-purple-500/40 cursor-pointer">
                          <span className="block font-bold text-[10px]">Milkshake</span>
                          <span className="block text-[8px] text-purple-400">$4.50</span>
                        </button>
                        <button onClick={() => addToCart({ name: "Orange Juice", price: 3.5 })} className="bg-white/[0.02] border border-white/5 p-1.5 rounded-lg text-left hover:border-purple-500/40 cursor-pointer">
                          <span className="block font-bold text-[10px]">Orange Juice</span>
                          <span className="block text-[8px] text-purple-400">$3.50</span>
                        </button>
                        <button onClick={() => addToCart({ name: "Double Espresso", price: 2.8 })} className="bg-white/[0.02] border border-white/5 p-1.5 rounded-lg text-left hover:border-purple-500/40 cursor-pointer">
                          <span className="block font-bold text-[10px]">Espresso</span>
                          <span className="block text-[8px] text-purple-400">$2.80</span>
                        </button>
                        <button onClick={() => addToCart({ name: "Croissant", price: 3.0 })} className="bg-white/[0.02] border border-white/5 p-1.5 rounded-lg text-left hover:border-purple-500/40 cursor-pointer">
                          <span className="block font-bold text-[10px]">Croissant</span>
                          <span className="block text-[8px] text-purple-400">$3.00</span>
                        </button>
                      </div>
                    </div>

                    {/* Simple Cart details inside screen */}
                    <div className="mt-2 flex-grow flex flex-col justify-end">
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2 space-y-1.5">
                        <div className="flex justify-between text-[9px] font-bold border-b border-white/5 pb-1">
                          <span>Active Cart</span>
                          <span className="text-purple-400">{posCart.length} Items</span>
                        </div>
                        <div className="max-h-[70px] overflow-y-auto space-y-1 scrollbar-none">
                          {posCart.map(item => (
                            <div key={item.id} className="flex justify-between items-center text-[9px] bg-white/[0.01] p-1 rounded">
                              <span className="text-gray-300">{item.qty}x {item.name}</span>
                              <div className="flex items-center space-x-1.5">
                                <span className="font-semibold text-purple-300">${(item.price * item.qty).toFixed(2)}</span>
                                <button onClick={() => removeCartItem(item.id)} className="text-red-400 hover:text-red-300 cursor-pointer"><Trash2 className="w-2.5 h-2.5" /></button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between pt-1 border-t border-white/5 text-[10px] font-bold">
                          <span>Total</span>
                          <span className="text-emerald-400">${posSubtotal.toFixed(2)}</span>
                        </div>
                        <button onClick={() => setPosCart([])} className="w-full bg-purple-600 hover:bg-purple-500 py-1.5 rounded-md text-[9px] font-bold mt-1 shadow shadow-purple-500/20 cursor-pointer">
                          Process Checkout ($ {posSubtotal.toFixed(2)})
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'categories' && (
                  <div className="space-y-3 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block">Manage Categories</span>
                      <div className="space-y-1 max-h-[160px] overflow-y-auto scrollbar-none">
                        {posCategories.map((cat, i) => (
                          <div key={i} className="flex justify-between items-center bg-white/[0.02] border border-white/5 px-2.5 py-1.5 rounded-lg">
                            <span className="font-semibold">{cat}</span>
                            <button onClick={() => setPosCategories(posCategories.filter(c => c !== cat))} className="text-gray-500 hover:text-red-400 cursor-pointer">
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={(e) => {
                      e.preventDefault();
                      if (!newCategory.trim()) return;
                      setPosCategories([...posCategories, newCategory.trim()]);
                      setNewCategory("");
                    }} className="flex items-center gap-1">
                      <input 
                        type="text" 
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="New category..."
                        className="flex-grow bg-white/[0.02] border border-white/10 rounded-lg px-2 py-1 text-[9px] focus:outline-none focus:border-purple-500 text-white"
                      />
                      <button type="submit" className="bg-purple-600 p-1 rounded-lg hover:bg-purple-500 text-white cursor-pointer"><Plus className="w-3.5 h-3.5" /></button>
                    </form>
                  </div>
                )}

                {activeTab === 'clients' && (
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block">Local Clients DB</span>
                    <div className="space-y-1">
                      <div className="bg-white/[0.02] border border-white/5 p-2 rounded-lg flex items-center justify-between">
                        <div>
                          <span className="block font-bold">Alaa Fathy</span>
                          <span className="block text-[8px] text-gray-500">alaa@pos-fathy.com</span>
                        </div>
                        <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">Regular</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 p-2 rounded-lg flex items-center justify-between">
                        <div>
                          <span className="block font-bold">Mona Ibrahim</span>
                          <span className="block text-[8px] text-gray-500">mona.ib@gmail.com</span>
                        </div>
                        <span className="text-[9px] font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-1.5 py-0.5 rounded">VIP</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 p-2 rounded-lg flex items-center justify-between">
                        <div>
                          <span className="block font-bold">Ahmad Salem</span>
                          <span className="block text-[8px] text-gray-500">ahmad.salem@outlook.com</span>
                        </div>
                        <span className="text-[9px] font-bold text-gray-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Basic</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'backup' && (
                  <div className="space-y-4 flex-grow flex flex-col items-center justify-center text-center p-4">
                    <div className="p-3 bg-purple-500/5 rounded-full border border-purple-500/10 relative">
                      <Database className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <span className="block font-bold text-[11px]">Database Synchronization</span>
                      <span className="block text-[8px] text-gray-500 mt-1 leading-relaxed">Secure and upload local SQLite database cache directly to Firebase Storage.</span>
                    </div>

                    <div className="w-full">
                      {isBackingUp ? (
                        <div className="space-y-2">
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2.2 }}
                              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                            />
                          </div>
                          <span className="text-[8px] text-purple-300 font-mono animate-pulse block">Uploading backup package...</span>
                        </div>
                      ) : backupCompleted ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center space-x-1.5 text-emerald-400 text-[10px] font-bold">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Successfully Synced!</span>
                          </div>
                          <span className="text-[8px] text-gray-500 block">Version block: #L452-9</span>
                        </div>
                      ) : null}
                    </div>

                    {!isBackingUp && (
                      <button 
                        onClick={handleBackup}
                        className="w-full bg-purple-600 hover:bg-purple-500 py-2 rounded-lg text-[9px] font-bold shadow-md shadow-purple-500/20 cursor-pointer"
                      >
                        {backupCompleted ? "Backup Again" : "Trigger Sync Now"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* 2. EDU VISTA APP SIMULATION */}
          {projectId === 'edu-vista' && (
            <motion.div 
              key="edu-vista-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex flex-col bg-[#05060f]"
            >
              {/* Edu Title */}
              <div className="bg-[#0e0f1d] px-3 py-2 border-b border-purple-500/10 flex items-center justify-between">
                <span className="font-bold text-indigo-300 flex items-center gap-1 text-[10px]">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  EduVista Academy
                </span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              </div>

              {/* Course views */}
              <div className="p-3 space-y-3 flex-grow overflow-y-auto scrollbar-none">
                {activeTab === 'home' && (
                  <div className="space-y-2.5">
                    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-2.5 rounded-xl text-left border border-indigo-500/20 relative overflow-hidden">
                      <span className="block text-[8px] text-indigo-200 uppercase font-mono tracking-wider">Welcome back</span>
                      <span className="block font-bold text-[10px] text-white mt-0.5">Hind Alaa Fathy</span>
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5 text-[8px] text-indigo-300">
                        <span>XP Level 4</span>
                        <span>420 XP to next level</span>
                      </div>
                    </div>

                    {/* Available courses list */}
                    <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">Featured Course</span>
                    <div className="bg-slate-900 border border-white/5 p-2 rounded-xl text-left space-y-1.5">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-[9px] text-white">Flutter Mobile & AI Integrations</span>
                        <span className="text-[7px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1 py-0.5 rounded">Core</span>
                      </div>
                      <span className="block text-[8px] text-gray-400 leading-normal">Learn how to build advanced state management frameworks and integrate Gemini API with Flutter.</span>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[7px] text-gray-500">
                          <span>Course Progress</span>
                          <span className="font-bold text-indigo-400">82%</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 w-[82%]" />
                        </div>
                      </div>
                      <button onClick={() => setActiveTab('lecture')} className="w-full bg-indigo-600 py-1 rounded-md text-[8px] font-bold mt-1 text-center cursor-pointer flex items-center justify-center gap-1 shadow shadow-indigo-500/20">
                        <Play className="w-2.5 h-2.5 fill-current" /> Continue Lecture
                      </button>
                    </div>

                    {/* Stats inside app */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-[#0d0e1b] border border-white/5 p-2 rounded-lg text-left">
                        <Award className="w-3.5 h-3.5 text-yellow-400" />
                        <span className="block text-slate-400 text-[8px] mt-1">Certificates</span>
                        <span className="block font-bold text-[11px] text-white">5 Earned</span>
                      </div>
                      <div className="bg-[#0d0e1b] border border-white/5 p-2 rounded-lg text-left">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="block text-slate-400 text-[8px] mt-1">Study Hours</span>
                        <span className="block font-bold text-[11px] text-white">142 Hrs</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'lecture' && (
                  <div className="space-y-3">
                    <button onClick={() => setActiveTab('home')} className="flex items-center text-[8px] text-indigo-400 hover:text-indigo-300 font-mono gap-1 cursor-pointer">
                      <ArrowLeft className="w-2.5 h-2.5" /> BACK TO DASHBOARD
                    </button>
                    <div className="relative aspect-video bg-slate-900 border border-white/10 rounded-lg overflow-hidden flex items-center justify-center">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-bz666GZcOhXBcCehjFu0sYQyjoYdu7p4kgAxfusbT5VZHdKkPdA1D5LkrFVUBtV87iDOKhmTPP-vYdDiyk6wcnH-oAaX8tnwsZ4OAbXs0mJ34PVfRnhJ-YUaeAU3QmNFGbIhpQTPAx9hrF1EKvPQhUHNpXDiXNflbwv9vmFIsdHLfKPcw2d5SqssCxtLr5Ntco8eZcJ8MsTnoMtzSuO4UwO6oU6kC7utgA0BhTp1rJvfbJoK8V_te22fL_nzkLlq8CyE815_MVu" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                      <Play className="w-8 h-8 text-indigo-400 bg-black/60 p-2 rounded-full border border-indigo-400/30 hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                    <div className="space-y-1 text-left">
                      <span className="block text-[8px] text-indigo-400 font-mono">Module 4 / Lecture 12</span>
                      <h4 className="font-bold text-[10px] text-white">Triggering local database caching protocols in offline networks</h4>
                      <p className="text-[8px] text-gray-400 leading-relaxed">This video segment details step-by-step methods to design local repository structures using SQLite and Dart packages.</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* 3. TODO APP SIMULATION */}
          {projectId === 'todo-app' && (
            <motion.div 
              key="todo-app-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex flex-col bg-[#050505] text-left"
            >
              <div className="bg-[#111] px-3 py-2 border-b border-white/5 flex items-center justify-between">
                <span className="font-bold text-slate-300 font-display flex items-center gap-1 text-[9px]">
                  ✓ ObsidianTodo
                </span>
                <span className="text-[7px] text-slate-500 font-mono">SQLite Local</span>
              </div>

              <div className="p-3 flex-grow flex flex-col justify-between overflow-y-auto">
                <div className="space-y-2.5 flex-grow">
                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">Daily Tasks</span>
                  <div className="space-y-1.5 max-h-[220px] overflow-y-auto scrollbar-none">
                    {todos.map(todo => (
                      <div 
                        key={todo.id} 
                        className={`flex justify-between items-center bg-white/[0.01] border border-white/[0.04] p-2 rounded-xl transition-all duration-300 ${todo.done ? 'opacity-40 bg-white/[0.005]' : ''}`}
                      >
                        <div className="flex items-center space-x-2 flex-grow pr-2 cursor-pointer" onClick={() => toggleTodo(todo.id)}>
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${todo.done ? 'bg-purple-600 border-purple-500 text-white' : 'border-white/20'}`}>
                            {todo.done && <Check className="w-2.5 h-2.5" />}
                          </div>
                          <span className={`text-[9px] text-slate-300 transition-all select-none ${todo.done ? 'line-through text-slate-500' : ''}`}>{todo.text}</span>
                        </div>
                        <button onClick={() => deleteTodo(todo.id)} className="text-slate-600 hover:text-red-400 cursor-pointer">
                          <Trash2 className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleAddTodo} className="flex gap-1 pt-2 border-t border-white/5">
                  <input 
                    type="text" 
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add task to SQLite..."
                    className="flex-grow bg-white/[0.01] border border-white/10 rounded-lg px-2.5 py-1.5 text-[8px] focus:outline-none focus:border-purple-500 text-slate-300"
                  />
                  <button type="submit" className="bg-purple-600 hover:bg-purple-500 p-1.5 rounded-lg text-white font-bold cursor-pointer"><Plus className="w-3.5 h-3.5" /></button>
                </form>
              </div>
            </motion.div>
          )}

          {/* 4. XO GAME SIMULATION */}
          {projectId === 'xo-game' && (
            <motion.div 
              key="xo-game-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex flex-col bg-[#080512] text-center justify-between p-3"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-purple-400 block font-display">Flutter X/O Match</span>
                <span className="text-[8px] text-gray-500 font-mono block">Vs AI Bot</span>
              </div>

              {/* Board */}
              <div className="grid grid-cols-3 gap-1.5 max-w-[160px] mx-auto my-3 w-full">
                {board.map((cell, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleCellClick(idx)}
                    className="aspect-square bg-[#110c22] border border-white/5 rounded-xl flex items-center justify-center font-display text-base font-black transition-all duration-300 hover:border-purple-500/30 cursor-pointer"
                  >
                    <AnimatePresence mode="wait">
                      {cell && (
                        <motion.span 
                          key={cell}
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          className={cell === 'X' ? 'text-purple-400' : 'text-emerald-400'}
                        >
                          {cell}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>

              {/* Status and Restart */}
              <div className="space-y-2">
                <div className="h-6 flex items-center justify-center text-[9px] font-semibold text-slate-300">
                  {gameWinner ? (
                    gameWinner === 'Tie' ? (
                      <span className="text-yellow-400">Match is a draw!</span>
                    ) : (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <Award className="w-3 h-3 text-yellow-400" /> Winner: {gameWinner}
                      </span>
                    )
                  ) : !isXNext ? (
                    <span className="text-purple-400 animate-pulse">AI is thinking...</span>
                  ) : (
                    <span>Your turn (X)</span>
                  )}
                </div>

                <button 
                  onClick={resetGame}
                  className="mx-auto flex items-center space-x-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[8px] font-bold text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Restart Match</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* 5. MOVIE APP SIMULATION */}
          {projectId === 'movie-app' && (
            <motion.div 
              key="movie-app-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex flex-col bg-[#050308]"
            >
              {/* Header */}
              <div className="bg-[#120c1b] px-3 py-2 border-b border-purple-500/10 flex items-center justify-between">
                <span className="font-bold text-pink-400 flex items-center gap-1 text-[9px]">
                  <Film className="w-3.5 h-3.5" />
                  CinemaX
                </span>
                <span className="text-[7px] text-gray-500 font-mono">TMDb API</span>
              </div>

              {/* Movie list inside mockup */}
              <div className="p-2.5 flex-grow overflow-y-auto space-y-2.5 scrollbar-none text-left">
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">Trending Now</span>
                
                {[
                  { id: 1, title: "Dune: Part Two", rating: 4.8, year: "2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj2H6f8GCqdziXmdAsllebyLgoSOeN_MbFEBgfgplocO1s3hNVQ7hnyyP2tbVWJEbMdYrq-ujJINLd5OMttA1ISKQnc3gYUmUom8kPmsJ7c74FslNpH0vZYREpxP5tNrDM4LRMAyeME6FI4vtNSIOyD-ZtoPmLvNscXC_lI73JcBipMm_6E9w7EAJrEGPaDpqAAoALAFgyb8e2SXZHlyCHcBPBj50NVai0Fatgkq4UE7kZdU7NGEeRV_biWkVa6V5QWiInMjVUfYMU" },
                  { id: 2, title: "Interstellar", rating: 4.9, year: "2014", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj2H6f8GCqdziXmdAsllebyLgoSOeN_MbFEBgfgplocO1s3hNVQ7hnyyP2tbVWJEbMdYrq-ujJINLd5OMttA1ISKQnc3gYUmUom8kPmsJ7c74FslNpH0vZYREpxP5tNrDM4LRMAyeME6FI4vtNSIOyD-ZtoPmLvNscXC_lI73JcBipMm_6E9w7EAJrEGPaDpqAAoALAFgyb8e2SXZHlyCHcBPBj50NVai0Fatgkq4UE7kZdU7NGEeRV_biWkVa6V5QWiInMjVUfYMU" }
                ].map(movie => (
                  <div key={movie.id} className="bg-[#0e0a16] border border-white/5 rounded-xl overflow-hidden flex">
                    <img src={movie.img} loading="lazy" className="w-12 h-16 object-cover opacity-60" />
                    <div className="p-2 flex-grow flex flex-col justify-between">
                      <div className="space-y-0.5">
                        <span className="block font-bold text-[9px] text-white line-clamp-1">{movie.title}</span>
                        <span className="block text-[7px] text-gray-500">{movie.year} • ★ {movie.rating}</span>
                      </div>
                      <button 
                        onClick={() => {
                          if (watchlist.includes(movie.id)) {
                            setWatchlist(watchlist.filter(id => id !== movie.id));
                          } else {
                            setWatchlist([...watchlist, movie.id]);
                          }
                        }}
                        className="self-start text-[7px] font-bold text-pink-400 flex items-center space-x-1 hover:text-pink-300 cursor-pointer"
                      >
                        <Heart className={`w-2.5 h-2.5 ${watchlist.includes(movie.id) ? 'fill-current text-pink-500' : ''}`} />
                        <span>{watchlist.includes(movie.id) ? 'In Watchlist' : 'Add Watchlist'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 6. NEWS APP SIMULATION */}
          {projectId === 'news-app' && (
            <motion.div 
              key="news-app-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex flex-col bg-[#040508]"
            >
              {/* Header */}
              <div className="bg-[#090b10] px-3 py-2 border-b border-white/5 flex items-center justify-between">
                <span className="font-bold text-slate-300 flex items-center gap-1 text-[9px]">
                  <Newspaper className="w-3.5 h-3.5 text-blue-400" />
                  Chronicle News
                </span>
                <span className="text-[7px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1 py-0.5 rounded font-mono">
                  Clean Arch
                </span>
              </div>

              {/* Feed inside mockup */}
              <div className="p-2.5 flex-grow overflow-y-auto space-y-2.5 scrollbar-none text-left">
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">World Feed</span>
                
                {[
                  { id: 1, title: "Flutter 3.22 compilation speed is optimized with WebAssembly", date: "Today", source: "TechCrunch" },
                  { id: 2, title: "DevOps practices and AWS server deployment frameworks", date: "Yesterday", source: "Wired" }
                ].map(news => (
                  <div key={news.id} className="bg-[#0b0c12] border border-white/5 p-2 rounded-xl space-y-1">
                    <div className="flex justify-between items-center text-[7px] text-gray-500">
                      <span>{news.source} • {news.date}</span>
                      <button 
                        onClick={() => {
                          if (bookmarkedNews.includes(news.id)) {
                            setBookmarkedNews(bookmarkedNews.filter(id => id !== news.id));
                          } else {
                            setBookmarkedNews([...bookmarkedNews, news.id]);
                          }
                        }}
                        className="text-gray-400 hover:text-blue-400 cursor-pointer"
                      >
                        <Heart className={`w-3 h-3 ${bookmarkedNews.includes(news.id) ? 'fill-blue-500 text-blue-500' : ''}`} />
                      </button>
                    </div>
                    <span className="block font-semibold text-[9px] text-slate-200 leading-normal">{news.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Standard Static fallback fallback - just in case */}
          {['pos-system', 'edu-vista', 'todo-app', 'xo-game', 'movie-app', 'news-app'].indexOf(projectId) === -1 && (
            <motion.div 
              key="static"
              className="flex-grow flex flex-col justify-between"
            >
              {screenshot ? (
                <img 
                  src={screenshot} 
                  alt={projectTitle} 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="flex-grow flex items-center justify-center p-4 bg-[#0a0616]">
                  <span className="text-gray-400 text-[10px] text-center font-mono">Demo Preview Unavailable</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Screen Interactive Overlay Badge for desktop */}
      <div className="absolute inset-x-0 bottom-4 text-[7px] text-center pointer-events-none select-none text-slate-500 font-mono z-20">
        INTERACTIVE PREVIEW
      </div>

      {/* Device Home Bar / Bottom line */}
      <div className="h-5 bg-slate-950/90 backdrop-blur-md flex items-center justify-center relative z-20 select-none pointer-events-none">
        <span className="w-16 h-1 bg-white/20 rounded-full" />
      </div>

      {/* Glossy overlay effect across the screen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10" />
    </div>
  );
}
