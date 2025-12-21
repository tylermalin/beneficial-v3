"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, AlertCircle, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

type Answer = {
  questionId: string
  value: number
}

type CategoryScores = {
  dataEvidence: number
  systemsIntegration: number
  governanceRisk: number
  businessValue: number
}

const questions = [
  {
    id: "data-quality",
    category: "dataEvidence" as const,
    text: "How would you rate the quality and accessibility of your current data assets?",
    options: [
      { label: "Fragmented, siloed, or incomplete", value: 0 },
      { label: "Some structured data, limited access", value: 1 },
      { label: "Well-organized, accessible data", value: 2 },
      { label: "Enterprise-grade data infrastructure", value: 3 },
    ],
    points: [0, 4, 9, 13],
  },
  {
    id: "data-governance",
    category: "dataEvidence" as const,
    text: "Do you have clear data governance and quality standards?",
    options: [
      { label: "No formal governance", value: 0 },
      { label: "Some policies, inconsistent enforcement", value: 1 },
      { label: "Established governance framework", value: 2 },
      { label: "Mature, automated governance", value: 3 },
    ],
    points: [0, 2, 5, 8],
  },
  {
    id: "system-integration",
    category: "systemsIntegration" as const,
    text: "How integrated are your current systems and data sources?",
    options: [
      { label: "Mostly disconnected systems", value: 0 },
      { label: "Some integration, manual processes", value: 1 },
      { label: "Well-integrated core systems", value: 2 },
      { label: "Seamless, API-driven architecture", value: 3 },
    ],
    points: [0, 4, 9, 13],
  },
  {
    id: "technical-infrastructure",
    category: "systemsIntegration" as const,
    text: "What is your current technical infrastructure readiness for AI workloads?",
    options: [
      { label: "Limited or no AI infrastructure", value: 0 },
      { label: "Some cloud services, ad-hoc setup", value: 1 },
      { label: "Dedicated AI infrastructure", value: 2 },
      { label: "Production-ready AI platform", value: 3 },
    ],
    points: [0, 2, 5, 8],
  },
  {
    id: "risk-framework",
    category: "governanceRisk" as const,
    text: "Do you have frameworks for managing AI-related risks (bias, security, compliance)?",
    options: [
      { label: "No formal risk management", value: 0 },
      { label: "Ad-hoc risk assessment", value: 1 },
      { label: "Established risk framework", value: 2 },
      { label: "Comprehensive, tested risk management", value: 3 },
    ],
    points: [0, 4, 9, 13],
  },
  {
    id: "compliance-readiness",
    category: "governanceRisk" as const,
    text: "How prepared are you for AI-related regulatory requirements?",
    options: [
      { label: "Not prepared, unclear requirements", value: 0 },
      { label: "Aware but not compliant", value: 1 },
      { label: "Mostly compliant, some gaps", value: 2 },
      { label: "Fully compliant, ongoing monitoring", value: 3 },
    ],
    points: [0, 2, 5, 8],
  },
  {
    id: "business-case",
    category: "businessValue" as const,
    text: "Do you have clear, measurable business cases for AI initiatives?",
    options: [
      { label: "No defined business cases", value: 0 },
      { label: "Some ideas, unclear value", value: 1 },
      { label: "Clear use cases with metrics", value: 2 },
      { label: "Proven ROI, scaled initiatives", value: 3 },
    ],
    points: [0, 4, 9, 13],
  },
  {
    id: "executive-ownership",
    category: "businessValue" as const,
    text: "Is there clear executive ownership and alignment on AI strategy?",
    options: [
      { label: "No clear ownership", value: 0 },
      { label: "Some support, limited alignment", value: 1 },
      { label: "Executive sponsor, good alignment", value: 2 },
      { label: "C-level ownership, strategic priority", value: 3 },
    ],
    points: [0, 2, 5, 8],
  },
  {
    id: "talent-capability",
    category: "systemsIntegration" as const,
    text: "What is your internal capability for building and deploying AI systems?",
    options: [
      { label: "No internal AI capability", value: 0 },
      { label: "Limited technical skills", value: 1 },
      { label: "Some AI expertise, growing team", value: 2 },
      { label: "Strong internal AI team", value: 3 },
    ],
    points: [0, 1, 3, 4],
  },
  {
    id: "change-management",
    category: "businessValue" as const,
    text: "How prepared is your organization for AI-driven change?",
    options: [
      { label: "No change management plan", value: 0 },
      { label: "Some awareness, limited planning", value: 1 },
      { label: "Change management framework in place", value: 2 },
      { label: "Mature change management culture", value: 3 },
    ],
    points: [0, 1, 3, 4],
  },
  {
    id: "measurement-framework",
    category: "dataEvidence" as const,
    text: "Do you have systems to measure AI performance and business impact?",
    options: [
      { label: "No measurement framework", value: 0 },
      { label: "Basic metrics, manual tracking", value: 1 },
      { label: "Established measurement systems", value: 2 },
      { label: "Real-time monitoring and optimization", value: 3 },
    ],
    points: [0, 1, 3, 4],
  },
  {
    id: "ethical-considerations",
    category: "governanceRisk" as const,
    text: "Have you addressed ethical considerations and bias in AI systems?",
    options: [
      { label: "Not addressed", value: 0 },
      { label: "Aware but no framework", value: 1 },
      { label: "Some processes in place", value: 2 },
      { label: "Comprehensive ethics framework", value: 3 },
    ],
    points: [0, 1, 3, 4],
  },
]

function calculateScores(answers: Answer[]): CategoryScores {
  const scores: CategoryScores = {
    dataEvidence: 0,
    systemsIntegration: 0,
    governanceRisk: 0,
    businessValue: 0,
  }

  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId)
    if (question) {
      const points = question.points[answer.value] || 0
      scores[question.category] += points
    }
  })

  return scores
}

function getTotalScore(scores: CategoryScores): number {
  return Object.values(scores).reduce((sum, score) => sum + score, 0)
}

function getResultState(score: number) {
  if (score <= 40) {
    return {
      label: "Early / Fragmented",
      description: "Your organization is in the early stages of AI readiness. Focus areas include foundational data infrastructure, basic governance, and building clear business cases.",
      cta: {
        label: "Book a Call",
        href: "/book-consultation",
      },
      icon: AlertCircle,
      color: "text-yellow-600",
    }
  } else if (score <= 70) {
    return {
      label: "Execution Risk",
      description: "You have foundational elements in place, but execution risks remain. Key gaps likely include integration challenges, governance maturity, or clear deployment pathways.",
      cta: {
        label: "Innovation Sprint",
        href: "/reserve-sprint",
      },
      icon: TrendingUp,
      color: "text-orange-600",
    }
  } else if (score <= 85) {
    return {
      label: "Scaling",
      description: "You have strong foundations and are ready to scale. Focus areas may include advanced integration, risk management refinement, or expanding successful initiatives.",
      cta: {
        label: "Strategy Call",
        href: "/book-consultation",
      },
      icon: Target,
      color: "text-blue-600",
    }
  } else {
    return {
      label: "Advanced",
      description: "Your organization demonstrates advanced AI readiness. You're positioned for strategic partnerships, complex deployments, and market leadership initiatives.",
      cta: {
        label: "Partner With Us",
        href: "/services#request-proposal",
      },
      icon: CheckCircle2,
      color: "text-green-600",
    }
  }
}

export default function AIReadinessDiagnosticPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showResults, setShowResults] = useState(false)
  const [scores, setScores] = useState<CategoryScores | null>(null)

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = [...answers]
    const existingIndex = newAnswers.findIndex((a) => a.questionId === questionId)
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex].value = value
    } else {
      newAnswers.push({ questionId, value })
    }
    
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      const calculatedScores = calculateScores(answers)
      setScores(calculatedScores)
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentQuestion = questions[currentStep]
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion.id)

  if (showResults && scores) {
    const totalScore = getTotalScore(scores)
    const result = getResultState(totalScore)
    const ResultIcon = result.icon

    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Your AI Readiness Assessment
              </h1>
              <div className="flex items-center justify-center gap-3 mb-8">
                <ResultIcon className={`h-12 w-12 ${result.color}`} />
                <div className="text-left">
                  <p className="text-2xl font-bold">{result.label}</p>
                  <p className="text-3xl font-bold text-primary">{totalScore}/100</p>
                </div>
              </div>
            </div>

            <Card className="mb-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold mb-4">Assessment Summary</h2>
                <p className="text-muted-foreground mb-6">{result.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Data & Evidence</h3>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(scores.dataEvidence / 25) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {scores.dataEvidence}/25
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Systems & Integration</h3>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(scores.systemsIntegration / 25) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {scores.systemsIntegration}/25
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Governance & Risk</h3>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(scores.governanceRisk / 25) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {scores.governanceRisk}/25
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Value & Ownership</h3>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(scores.businessValue / 25) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {scores.businessValue}/25
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" asChild>
                <Link href={result.cta.href}>
                  {result.cta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {currentStep === 0 && (
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Enterprise AI Readiness & Value Diagnostic
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Assess your organization's readiness for AI adoption across data, systems, governance, and business value. This diagnostic identifies key gaps and recommends the right engagement path.
              </p>
              <p className="text-base text-muted-foreground/80 max-w-xl mx-auto">
                Takes approximately 5 minutes. Your responses are confidential.
              </p>
            </div>
          )}

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Question {currentStep + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(((currentStep + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-6">
                {currentQuestion.text}
              </h2>

              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      currentAnswer?.value === option.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          currentAnswer?.value === option.value
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {currentAnswer?.value === option.value && (
                          <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                        )}
                      </div>
                      <span className="text-muted-foreground">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  className="bg-primary hover:bg-primary/90"
                >
                  {currentStep === questions.length - 1 ? "View Results" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}

