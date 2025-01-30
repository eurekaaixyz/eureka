document.addEventListener('DOMContentLoaded', function() {
    // Header HTML
    const headerHTML = `
        <header class="header">
            <div class="container">
                <nav class="nav">
                    <a href="index.html" class="logo">EurekaAI</a>
                    <div class="nav-links">
                        <a href="index.html#products">Products</a>
                        <a href="research.html">Research</a>
                        <a href="tokenomics.html" style="margin-right: 20px;">Tokenomics</a>
                    </div>
                    <div class="nav-actions">
                        <a href="#" class="try-btn">Try EurekaAI</a>
                    </div>
                </nav>
            </div>
        </header>
    `;

    // Footer HTML
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-column">
                    <h4>Our research</h4>
                    <ul>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Index</a></li>
                        <li><a href="#">Latest advancements</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Our Products</h4>
                    <ul>
                        <li><a href="trading-gpt.html">TradingGPT</a></li>
                        <li><a href="defi-assistant.html">DeFi Assistant</a></li>
                        <li><a href="nft-curator.html">NFT Curator</a></li>
                        <li><a href="cryptoresearch-ai.html">CryptoResearch AI</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>API Access (Coming soon)</h4>
                    <ul>
                        <li><a href="#">Platform overview</a></li>
                        <li><a href="#">API Documentation ↗</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Developer Portal ↗</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Our Charter</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Terms & policies</h4>
                    <ul>
                        <li><a href="terms-and-conditions.html">Terms of use</a></li>
                        <li><a href="privacy-policy.html">Privacy policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    `;

    // Insert the components
    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}); 