import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      // ユーザーがスクロールした場合、状態を更新
        setIsScrolled(window.scrollY > 50);
    };
    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', handleScroll);
    // クリーンアップ関数でイベントリスナーを削除
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
    <div>
    <header className={`menu ${isScrolled ? 'scrolled' : ''}`}>
        <h1>My Menu</h1>
    </header>
        <main>
            <nav id="global-nav">
                <ul class="menu">
                <li class="menu-profile ">
                    <a href="#profile-box" class="menu-list">PROFILE</a>
                </li>
                <li class="menu-skill">
                    <a href="#skill-box" class="menu-list">SKILL</a>
                </li>
                <li class="menu-works">
                    <a href="#works-box" class="menu-list">WORKS</a>
                </li>
                <li class="menu-contact">
                    <a href="#contact-box" class="menu-list">CONTACT</a>
                </li>
                </ul>
            </nav>
            <p>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            <li>
                a
            </li>
            </p>
        </main>
    </div>
    );
}

export default App;