"use client";

import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  Anchor,
  BadgeCheck,
  BatteryCharging,
  Bed,
  Brain,
  BrainCircuit,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  CircleUserRound,
  Clapperboard,
  Clock,
  Compass,
  Gauge,
  Handshake,
  Heart,
  HelpCircle,
  Focus,
  History,
  Lightbulb,
  Loader2,
  MessageCircle,
  Moon,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap
} from "lucide-react";

type QuestionOption = {
  label: string;
  icon: LucideIcon;
};

type Question = {
  prompt: string;
  options: QuestionOption[];
};

const QUESTIONS: Question[] = [
  {
    prompt:
      "Em qual dessas situações você mais se identifica quando um pensamento indesejado surge?",
    options: [
      {
        label:
          "Estou no meio de uma tarefa importante e perco completamente o foco.",
        icon: Target
      },
      {
        label: "Estou tentando relaxar ou dormir, mas minha mente não desliga.",
        icon: Moon
      },
      {
        label:
          "Estou em uma conversa e de repente me sinto distante e ansioso(a).",
        icon: MessageCircle
      }
    ]
  },
  {
    prompt:
      "Qual área da sua vida você sente que é mais sabotada por esses pensamentos?",
    options: [
      {
        label: "Meus relacionamentos e vida social.",
        icon: Users
      },
      {
        label: "Minha carreira e produtividade.",
        icon: Briefcase
      },
      {
        label: "Minha autoestima e paz interior.",
        icon: Heart
      }
    ]
  },
  {
    prompt: "Quando esses pensamentos aparecem, eles costumam ser sobre...",
    options: [
      {
        label:
          "Preocupações excessivas com o futuro ou erros do passado.",
        icon: History
      },
      {
        label: "Dúvidas sobre minhas próprias capacidades e valor.",
        icon: HelpCircle
      },
      {
        label: "Medos irracionais ou cenários catastróficos.",
        icon: AlertTriangle
      }
    ]
  },
  {
    prompt:
      "Com que frequência você se percebe lutando contra um pensamento, tentando 'não pensar' nele?",
    options: [
      {
        label: "Várias vezes ao dia, é exaustivo.",
        icon: Gauge
      },
      {
        label: "Pelo menos uma vez por dia.",
        icon: Clock
      },
      {
        label: "Algumas vezes por semana.",
        icon: CalendarClock
      }
    ]
  },
  {
    prompt:
      "Qual sentimento é mais forte logo após um ciclo de pensamentos intrusivos?",
    options: [
      {
        label: "Ansiedade e um nó no estômago.",
        icon: Zap
      },
      {
        label: "Culpa ou vergonha por ter esses pensamentos.",
        icon: ShieldAlert
      },
      {
        label: "Esgotamento mental, como se tivesse corrido uma maratona.",
        icon: BatteryCharging
      }
    ]
  },
  {
    prompt:
      "Esses pensamentos já fizeram você evitar situações ou pessoas para não serem 'ativados'?",
    options: [
      {
        label:
          "Sim, com frequência. Minha vida social é limitada por causa disso.",
        icon: CircleUserRound
      },
      {
        label: "Sim, algumas vezes. Já deixei de fazer coisas que queria.",
        icon: Compass
      },
      {
        label: "Penso em evitar, mas geralmente não chego a fazê-lo.",
        icon: Anchor
      }
    ]
  },
  {
    prompt: "Avalie o impacto desses pensamentos na sua qualidade de sono:",
    options: [
      {
        label:
          "Péssimo. Tenho dificuldade para adormecer ou acordo no meio da noite com a mente a mil.",
        icon: Bed
      },
      {
        label: "Regular. Demoro a pegar no sono por causa das preocupações.",
        icon: Moon
      },
      {
        label: "Leve. Às vezes atrapalha, mas não sempre.",
        icon: Sparkles
      }
    ]
  },
  {
    prompt:
      "Quanto da sua energia mental diária você sente que é consumida por esses pensamentos?",
    options: [
      {
        label: "Mais de 50%. Sinto que vivo para me preocupar.",
        icon: Brain
      },
      {
        label: "Entre 20% e 50%. É um gasto significativo.",
        icon: Activity
      },
      {
        label: "Menos de 20%, mas ainda assim me incomoda.",
        icon: ShieldCheck
      }
    ]
  },
  {
    prompt:
      "Você já se sentiu sozinho(a) ou incompreendido(a) por não conseguir simplesmente 'desligar' sua mente?",
    options: [
      {
        label: "Sim, o tempo todo. Ninguém parece entender o que passo.",
        icon: CircleUserRound
      },
      {
        label: "Sim, às vezes sinto que há algo de errado comigo.",
        icon: HelpCircle
      }
    ]
  },
  {
    prompt:
      "Se você pudesse eliminar o impacto desses pensamentos, qual seria o maior benefício?",
    options: [
      {
        label:
          "Sentir uma paz interior e um silêncio mental que não tenho há anos.",
        icon: Sparkles
      },
      {
        label: "Ter mais energia e foco para realizar meus projetos e metas.",
        icon: Briefcase
      },
      {
        label: "Ser mais presente e confiante nos meus relacionamentos.",
        icon: Handshake
      }
    ]
  },
  {
    prompt:
      "Imagine que você aprendeu uma técnica para lidar com qualquer pensamento intrusivo em menos de 5 minutos. Como isso mudaria seu dia?",
    options: [
      {
        label: "Seria uma revolução. Eu teria o controle da minha vida de volta.",
        icon: BadgeCheck
      },
      {
        label: "Me daria uma segurança e confiança que não sinto hoje.",
        icon: ShieldCheck
      }
    ]
  },
  {
    prompt: "Qual dessas habilidades você mais gostaria de desenvolver?",
    options: [
      {
        label: "A capacidade de observar um pensamento negativo sem reagir a ele.",
        icon: Compass
      },
      {
        label:
          "A habilidade de 'trocar de estação mental' quando minha mente entra em um ciclo vicioso.",
        icon: Focus
      },
      {
        label:
          "A confiança para saber que um pensamento é apenas um pensamento, e não um fato.",
        icon: Lightbulb
      }
    ]
  },
  {
    prompt:
      "Você acredita que é possível treinar sua mente para ter mais controle e paz, assim como se treina um músculo na academia?",
    options: [
      {
        label: "Sim, acredito que com o método certo, é totalmente possível.",
        icon: BrainCircuit
      },
      {
        label: "Tenho esperança de que sim.",
        icon: Sparkles
      }
    ]
  },
  {
    prompt: "Há quanto tempo você vem sofrendo com o impacto desses pensamentos?",
    options: [
      {
        label: "Há anos. Já perdi as contas.",
        icon: History
      },
      {
        label: "Entre 6 meses e 2 anos.",
        icon: CalendarClock
      },
      {
        label: "É algo mais recente, mas que vem piorando.",
        icon: Clock
      }
    ]
  },
  {
    prompt:
      "De 0 a 10, o quão comprometido(a) você está em encontrar uma solução REAL para isso nos próximos 30 dias?",
    options: [
      {
        label: "10 - É minha prioridade número um. Não aguento mais viver assim.",
        icon: CheckCircle2
      },
      {
        label: "8-9 - Estou muito motivado(a) e pronto(a) para agir.",
        icon: BadgeCheck
      },
      {
        label: "6-7 - Estou começando a buscar soluções sérias.",
        icon: Gauge
      }
    ]
  },
  {
    prompt:
      "Por fim, se você tivesse acesso a um método passo a passo, criado por um especialista, para guiar você nesse processo, você estaria disposto(a) a seguir as instruções para ter sua paz mental de volta?",
    options: [
      {
        label: "Com certeza. Estou pronto(a) para fazer o que for preciso.",
        icon: Handshake
      },
      {
        label: "Sim, preciso de um guia para me ajudar.",
        icon: Anchor
      }
    ]
  }
];

const TRANSITION_DELAY_MS = 3000;
const CTA_DELAY_MS = 135000; // 2 minutes and 15 seconds
const VIDEO_URL =
  "https://www.youtube.com/embed/SEU_VIDEO_AQUI?autoplay=1&controls=0&rel=0&modestbranding=1";
const CTA_URL = "https://curso.pensamentointrusivo.com.br/";

type Stage = "welcome" | "quiz" | "transition" | "video";

export default function HomePage() {
  const [stage, setStage] = useState<Stage>("welcome");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    if (stage !== "transition") {
      return;
    }

    const transitionTimer = window.setTimeout(() => {
      setStage("video");
    }, TRANSITION_DELAY_MS);

    return () => window.clearTimeout(transitionTimer);
  }, [stage]);

  useEffect(() => {
    if (stage !== "video") {
      setCtaVisible(false);
      return;
    }

    const ctaTimer = window.setTimeout(() => {
      setCtaVisible(true);
    }, CTA_DELAY_MS);

    return () => window.clearTimeout(ctaTimer);
  }, [stage]);

  const progress = useMemo(() => {
    if (stage !== "quiz") {
      return 0;
    }

    const answered = questionIndex;
    return (answered / QUESTIONS.length) * 100;
  }, [stage, questionIndex]);

  const handleAnswer = () => {
    const nextIndex = questionIndex + 1;
    if (nextIndex < QUESTIONS.length) {
      setQuestionIndex(nextIndex);
    } else {
      setStage("transition");
    }
  };

  const handleStart = () => {
    setStage("quiz");
    setQuestionIndex(0);
  };

  const question = QUESTIONS[questionIndex];

  return (
    <main className="page">
      <div className="page-inner">
        {stage === "quiz" && (
          <header className="progress-wrapper" aria-label="Progresso do diagnóstico">
            <div className="progress-track">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <span className="progress-text">
              Pergunta {questionIndex + 1} de {QUESTIONS.length}
            </span>
          </header>
        )}

        <section className="card">
          {stage === "welcome" && <WelcomeScreen onStart={handleStart} />}

          {stage === "quiz" && question && (
            <QuestionScreen
              question={question.prompt}
              options={question.options}
              onSelect={handleAnswer}
            />
          )}

          {stage === "transition" && <TransitionScreen />}

          {stage === "video" && <VideoScreen ctaVisible={ctaVisible} />}
        </section>

        <Footer />
      </div>
    </main>
  );
}

type WelcomeProps = {
  onStart: () => void;
};

function WelcomeScreen({ onStart }: WelcomeProps) {
  return (
    <div className="stack" role="region" aria-labelledby="welcome-heading">
      <div className="welcome-icon" aria-hidden="true">
        <Brain size={48} />
      </div>
      <h1 id="welcome-heading">
        Qual é o Nível de Impacto dos Pensamentos Intrusivos na Sua Vida?
      </h1>
      <p>
        Faça nosso diagnóstico gratuito de 2 minutos e receba um plano de ação personalizado para recuperar o controle da sua mente.
      </p>
      <button type="button" className="cta" onClick={onStart}>
        INICIAR DIAGNÓSTICO GRATUITO
      </button>
    </div>
  );
}

type QuestionProps = {
  question: string;
  options: QuestionOption[];
  onSelect: () => void;
};

function QuestionScreen({ question, options, onSelect }: QuestionProps) {
  return (
    <div className="stack" role="group" aria-live="polite">
      <h2 className="question">{question}</h2>
      <div className="options">
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            className="option"
            onClick={onSelect}
          >
            <span className="option-icon" aria-hidden="true">
              <option.icon size={24} />
            </span>
            <span className="option-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TransitionScreen() {
  return (
    <div className="stack" role="status" aria-live="assertive">
      <Loader2 className="spinner" aria-hidden="true" />
      <p>Calculando seu Diagnóstico de Pensamento Intrusivo...</p>
    </div>
  );
}

type VideoScreenProps = {
  ctaVisible: boolean;
};

function VideoScreen({ ctaVisible }: VideoScreenProps) {
  return (
    <div className="stack" aria-live="polite">
      <div className="video-wrapper">
        <iframe
          src={VIDEO_URL}
          title="Vídeo de vendas Diagnóstico de Pensamento Intrusivo"
          allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="video-copy">
        <Clapperboard size={24} aria-hidden="true" />
        <span>
          Enquanto isso, assista a este vídeo crucial para descobrir a causa nº 1 por trás da sua mente agitada.
        </span>
      </p>
      {ctaVisible ? (
        <a className="cta" href={CTA_URL} rel="noopener noreferrer" target="_blank">
          VER MEU DIAGNÓSTICO E CONHECER O MÉTODO
        </a>
      ) : (
        <span className="cta-placeholder" aria-live="polite">
          O próximo passo será liberado em instantes...
        </span>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>Dr. Jô Furlan – Todos os direitos reservados – Política de Privacidade – Termos de Uso</span>
    </footer>
  );
}

