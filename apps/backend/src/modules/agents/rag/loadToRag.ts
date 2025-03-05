import { pgVector } from "@/db";
import { openai } from "@ai-sdk/openai";
import { MDocument } from "@mastra/rag";
import { embedMany } from "ai";

export async function loadToRag() {
  const doc = MDocument.fromText(`
    Claude Code
    Claude Code overview
    Learn about Claude Code, an agentic coding tool made by Anthropic. Currently in beta as a research preview.


    npm install -g @anthropic-ai/claude-code
    Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster through natural language commands. By integrating directly with your development environment, Claude Code streamlines your workflow without requiring additional servers or complex setup.

    Claude Code’s key capabilities include:

    Editing files and fixing bugs across your codebase
    Answering questions about your code’s architecture and logic
    Executing and fixing tests, linting, and other commands
    Searching through git history, resolving merge conflicts, and creating commits and PRs
    Research preview

    Code is in beta as a research preview. We’re gathering developer feedback on AI collaboration preferences, which workflows benefit most from AI assistance, and how to improve the agent experience.

    This early version will evolve based on user feedback. We plan to enhance tool execution reliability, support for long-running commands, terminal rendering, and Claude’s self-knowledge of its capabilities in the coming weeks.

    Report bugs directly with the /bug command or through our GitHub repository.

    ​
    Before you begin
    ​
    Check system requirements
    Operating Systems: macOS 10.15+, Ubuntu 20.04+/Debian 10+, or Windows via WSL
    Hardware: 4GB RAM minimum
    Software:
    Node.js 18+
    git 2.23+ (optional)
    GitHub or GitLab CLI for PR workflows (optional)
    ripgrep (rg) for enhanced file search (optional)
    Network: Internet connection required for authentication and AI processing
    Location: Available only in supported countries
    Troubleshooting WSL installation

    Currently, Claude Code does not run directly in Windows, and instead requires WSL. If you encounter issues in WSL:

    OS/platform detection issues: If you receive an error during installation, WSL may be using Windows npm. Try:

    Run npm config set os linux before installation
    Install with npm install -g @anthropic-ai/claude-code --force --no-os-check
    Node not found errors: If you see exec: node: not found when running claude, your WSL environment may be using a Windows installation of Node.js. You can confirm this with which npm and which node, which should point to Linux paths starting with /usr/ rather than /mnt/c/. To fix this, try installing Node via your Linux distribution’s package manager or via nvm.

    ​
    Install and authenticate
    1
    Install Claude Code

    Run in your terminal: npm install -g @anthropic-ai/claude-code

    2
    Navigate to your project

    cd your-project-directory
    3
    Start Claude Code

    Run claude to launch
    4
    Complete authentication

    Follow the one-time OAuth process with your Console account. You’ll need active billing at console.anthropic.com.

    ​
    Core features and workflows
    Claude Code operates directly in your terminal, understanding your project context and taking real actions. No need to manually add files to context - Claude will explore your codebase as needed. Claude Code uses claude-3-7-sonnet-20250219 by default.

    ​
    Security and privacy by design
    Your code’s security is paramount. Claude Code’s architecture ensures:

    Direct API connection: Your queries go straight to Anthropic’s API without intermediate servers
    Works where you work: Operates directly in your terminal
    Understands context: Maintains awareness of your entire project structure
    Takes action: Performs real operations like editing files and creating commits
    ​
    From questions to solutions in seconds

    # Ask questions about your codebase
    claude
    > how does our authentication system work?

    # Create a commit with one command
    claude commit

    # Fix issues across multiple files
    claude "fix the type errors in the auth module"
    ​
    Initialize your project
    For first-time users, we recommend:

    Start Claude Code with claude
    Try a simple command like summarize this project
    Generate a CLAUDE.md project guide with /init
    Ask Claude to commit the generated CLAUDE.md file to your repository
    ​
    Use Claude Code for common tasks
    Claude Code operates directly in your terminal, understanding your project context and taking real actions. No need to manually add files to context - Claude will explore your codebase as needed.

    ​
    Understand unfamiliar code

    > what does the payment processing system do?
    > find where user permissions are checked
    > explain how the caching layer works
    ​
    Automate Git operations

    > commit my changes
    > create a pr
    > which commit added tests for markdown back in December?
    > rebase on main and resolve any merge conflicts
    ​
    Edit code intelligently

    > add input validation to the signup form
    > refactor the logger to use the new API
    > fix the race condition in the worker queue
    ​
    Test and debug your code

    > run tests for the auth module and fix failures
    > find and fix security vulnerabilities
    > explain why this test is failing
    ​
    Encourage deeper thinking
    For complex problems, explicitly ask Claude to think more deeply:


    > think about how we should architect the new payment service
    > think hard about the edge cases in our authentication flow
    ​
    Control Claude Code with commands
    ​
    CLI commands
    Command	Description	Example
    claude	Start interactive REPL	claude
    claude "query"	Start REPL with initial prompt	claude "explain this project"
    claude -p "query"	Run one-off query, then exit	claude -p "explain this function"
    cat file | claude -p "query"	Process piped content	cat logs.txt | claude -p "explain"
    claude config	Configure settings	claude config set --global theme dark
    claude update	Update to latest version	claude update
    claude mcp	Configure Model Context Protocol servers	See MCP section in tutorials
    CLI flags:

    --print: Print response without interactive mode
    --verbose: Enable verbose logging
    --dangerously-skip-permissions: Skip permission prompts (only in Docker containers without internet)
    ​
    Slash commands
    Control Claude’s behavior within a session:

    Command	Purpose
    /bug	Report bugs (sends conversation to Anthropic)
    /clear	Clear conversation history
    /compact	Compact conversation to save context space
    /config	View/modify configuration
    /cost	Show token usage statistics
    /doctor	Checks the health of your Claude Code installation
    /help	Get usage help
    /init	Initialize project with CLAUDE.md guide
    /login	Switch Anthropic accounts
    /logout	Sign out from your Anthropic account
    /pr_comments	View pull request comments
    /review	Request code review
    /terminal-setup	Install Shift+Enter key binding for newlines (iTerm2 and VSCode only)
    ​
    `);

  const chunks = await doc.chunk();

  const { embeddings } = await embedMany({
    values: chunks.map((chunk) => chunk.text),
    model: openai.embedding("text-embedding-3-small"),
  });

  await pgVector.createIndex({
    indexName: "test_index",
    dimension: 1536,
  });

  await pgVector.upsert({
    indexName: "test_index",
    vectors: embeddings,
    metadata: chunks?.map((chunk: any) => ({ text: chunk.text })),
  });
}
