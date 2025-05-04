
   
        // Copy Code Functionality
        function copyCode(button) {
            const code = button.previousElementSibling.querySelector('code').innerText;

            // Check if the Clipboard API is supported
            if (navigator.clipboard) {
                navigator.clipboard.writeText(code).then(() => {
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy Code';
                    }, 2000);
                }).catch(() => {
                    fallbackCopyCode(code, button);
                });
            } else {
                fallbackCopyCode(code, button);
            }
        }

        // Fallback method for copying text
        function fallbackCopyCode(code, button) {
            const textarea = document.createElement('textarea');
            textarea.value = code;
            textarea.style.position = 'fixed'; // Prevent scrolling to bottom
            document.body.appendChild(textarea);
            textarea.select();

            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy Code';
                    }, 2000);
                } else {
                    alert('Failed to copy code. Please copy manually.');
                }
            } catch (err) {
                alert('Failed to copy code. Please copy manually.');
            } finally {
                document.body.removeChild(textarea);
            }
        }

        // Toggle Code Previews Functionality
        function toggleCodePreviews() {
            const codePreviews = document.querySelectorAll('.code-preview');
            const toggleButton = document.querySelector('.controls .button:nth-child(2)');

            codePreviews.forEach(preview => {
                preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
            });

            toggleButton.textContent = toggleButton.textContent === 'Hide Code Previews' ? 'Show Code Previews' : 'Hide Code Previews';
        }


        