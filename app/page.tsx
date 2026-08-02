import type { CSSProperties } from "react";

const backendStack = ["Java", "Python", "C++", "C", "Go"];
const agentStack = ["RAG", "MCP", "Agent", "Tool Calling", "Workflow"];
const frontendStack = ["TypeScript", "JavaScript", "CSS", "Vue", "React"];

const highlights = [
  {
    label: "Backend Core",
    title: "高并发服务与工程化后端",
    text: "擅长用 Java 构建可靠服务，也能用 Python、Go、C/C++处理脚本、系统能力和性能敏感模块。",
  },
  {
    label: "Agent Systems",
    title: "RAG / MCP / Agent 应用开发",
    text: "关注检索增强、上下文编排、工具调用、多 Agent 协作和可观测的智能工作流。",
  },
  {
    label: "Full Stack",
    title: "从接口到交互的完整闭环",
    text: "能用 TypeScript、JavaScript、CSS、Vue、React 搭建清晰、快速、可维护的前端体验。",
  },
];

const projectIdeas = [
  "RAG knowledge base with document ingestion, vector search, rerank and answer trace",
  "MCP server for internal tools, database actions and developer automation",
  "Java microservice template with auth, cache, queue, metrics and CI-ready structure",
  "Agent workflow console for planning, tool execution, logs and human review",
];

const metrics = [
  ["01", "System Design", "API, cache, queue, data model"],
  ["02", "AI Native", "RAG, MCP, agent orchestration"],
  ["03", "Performance", "JVM, Go services, C/C++ modules"],
  ["04", "Frontend Craft", "Vue, React, TypeScript UI"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070f] text-slate-100">
      <section className="hero relative isolate">
        <div className="matrix-grid" aria-hidden="true" />
        <div className="data-streams" aria-hidden="true">
          {["Java", "RAG", "MCP", "Go", "React", "C++", "Agent"].map(
            (item, index) => (
              <span key={item} style={{ "--i": index } as CSSProperties}>
                {item}
              </span>
            ),
          )}
        </div>

        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 text-sm text-slate-300 lg:px-8">
          <a className="brand-mark" href="#top" aria-label="Cat FC home">
            <span>Cat-FC</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#stack">Stack</a>
            <a href="#agent">Agent</a>
            <a href="#projects">Projects</a>
          </div>
        </nav>

        <div
          id="top"
          className="mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl items-center gap-10 px-6 pb-20 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
        >
          <div className="relative z-10">
            <div className="eyebrow">Backend Developer / Agent Builder</div>
            <h1>
              Java 后端工程师
              <span>构建可运行、可扩展、可进化的智能系统。</span>
            </h1>
            <p className="hero-copy">
              主攻后端开发，覆盖 Java、Python、C++、C、Go；同时深耕
              RAG、MCP 与 Agent 工程，把模型能力接入真实业务、工具链和数据系统。
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                查看能力地图
              </a>
              <a className="secondary-action" href="https://github.com/" target="_blank">
                GitHub
              </a>
            </div>
            <div className="stack-line" aria-label="Primary skill stack">
              {[...backendStack, ...agentStack.slice(0, 3)].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="terminal-panel" aria-label="Developer profile card">
            <div className="terminal-header">
              <span />
              <span />
              <span />
              <p>profile.boot</p>
            </div>
            <div className="terminal-body">
              <p>
                <span className="prompt">$</span> whoami
              </p>
              <strong>Java Backend Developer</strong>
              <p>
                <span className="prompt">$</span> focus --domains
              </p>
              <code>distributed_systems / rag / mcp / agent_runtime</code>
              <p>
                <span className="prompt">$</span> build --stack
              </p>
              <div className="terminal-tags">
                {backendStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="signal-card">
                <div>
                  <b>RAG Pipeline</b>
                  <small>ingest {"->"} embed {"->"} retrieve {"->"} rerank {"->"} answer</small>
                </div>
                <div className="signal-bars" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="content-band">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="section-heading">
            <p>Engineering Stack</p>
            <h2>技术栈不是列表，是把想法落地的工具箱。</h2>
          </div>
          <div className="stack-grid">
            <StackColumn title="Backend" items={backendStack} />
            <StackColumn title="Agent" items={agentStack} featured />
            <StackColumn title="Frontend" items={frontendStack} />
          </div>
        </div>
      </section>

      <section id="agent" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="capability-layout">
          <div>
            <div className="section-heading align-left">
              <p>Agent Development</p>
              <h2>把 LLM 变成能接入系统、调用工具、产生结果的工程模块。</h2>
            </div>
            <div className="timeline">
              {["Knowledge", "Context", "Tools", "Execution"].map((item) => (
                <div key={item}>
                  <span>{item}</span>
                  <p>
                    {item === "Knowledge" &&
                      "文档解析、向量化、检索策略与答案溯源。"}
                    {item === "Context" &&
                      "上下文压缩、会话状态、长期记忆与任务边界。"}
                    {item === "Tools" &&
                      "MCP 服务、函数调用、权限控制与工具路由。"}
                    {item === "Execution" && "Agent 计划、执行日志、异常恢复与人工确认。"}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="radar-card">
            {metrics.map(([num, title, text]) => (
              <article key={title}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="content-band bottom-band">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="section-heading">
            <p>Git Profile Ready</p>
            <h2>适合放到 GitHub 主页的项目方向。</h2>
          </div>
          <div className="project-list">
            {projectIdeas.map((project, index) => (
              <article key={project}>
                <span>0{index + 1}</span>
                <p>{project}</p>
              </article>
            ))}
          </div>
          <div className="footer-cta">
            <p>Open to backend systems, AI agents and full-stack product engineering.</p>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function StackColumn({
  title,
  items,
  featured = false,
}: {
  title: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <article className={featured ? "stack-card featured" : "stack-card"}>
      <h3>{title}</h3>
      <div>
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}
