import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PersonalityQuiz = () => {
  const questions = [
    // Extraversie vragen
    {
      text: "Ik voel me op mijn gemak in grote gezelschappen",
      trait: "Extraversie",
      dimension: "Sociale interactie"
    },
    {
      text: "Ik begin vaak gesprekken met vreemden",
      trait: "Extraversie",
      dimension: "Sociale assertiviteit"
    },
    {
      text: "Ik hou ervan om nieuwe mensen te ontmoeten",
      trait: "Extraversie",
      dimension: "Sociale energie"
    },
    {
      text: "Ik word blij van sociale activiteiten",
      trait: "Extraversie",
      dimension: "Sociale stimulatie"
    },
    {
      text: "Ik ben meestal de sfeermaker in een groep",
      trait: "Extraversie",
      dimension: "Sociale dynamiek"
    },

    // Neuroticisme vragen
    {
      text: "Ik maak me vaak zorgen over toekomstige gebeurtenissen",
      trait: "Neuroticisme",
      dimension: "Piekeren"
    },
    {
      text: "Mijn stemmingen kunnen snel wisselen",
      trait: "Neuroticisme",
      dimension: "Emotionele instabiliteit"
    },
    {
      text: "Ik voel me snel geïrriteerd",
      trait: "Neuroticisme",
      dimension: "Emotionele reactiviteit"
    },
    {
      text: "Het kost me moeite om me te ontspannen",
      trait: "Neuroticisme",
      dimension: "Stress"
    },
    {
      text: "Ik ben bang om fouten te maken",
      trait: "Neuroticisme",
      dimension: "Perfectionisme"
    },

    // Openheid vragen
    {
      text: "Ik ben nieuwsgierig naar nieuwe ideeën en ervaringen",
      trait: "Openheid",
      dimension: "Intellectuele nieuwsgierigheid"
    },
    {
      text: "Ik hou van creatieve en artistieke activiteiten",
      trait: "Openheid",
      dimension: "Artistieke interesse"
    },
    {
      text: "Ik sta open voor verschillende perspectieven",
      trait: "Openheid",
      dimension: "Flexibiliteit van denken"
    },
    {
      text: "Ik geniet van theoretische discussies",
      trait: "Openheid",
      dimension: "Intellectuele uitdaging"
    },
    {
      text: "Ik verken graag nieuwe filosofische concepten",
      trait: "Openheid",
      dimension: "Intellectuele exploratie"
    },

    // Altruïsme vragen
    {
      text: "Ik help anderen graag zonder iets terug te verwachten",
      trait: "Altruïsme",
      dimension: "Empathie"
    },
    {
      text: "Ik voel me betrokken bij de gevoelens van anderen",
      trait: "Altruïsme",
      dimension: "Compassie"
    },
    {
      text: "Ik geloof dat de meeste mensen goed van nature zijn",
      trait: "Altruïsme",
      dimension: "Vertrouwen"
    },
    {
      text: "Ik ben bereid compromissen te sluiten",
      trait: "Altruïsme",
      dimension: "Meegaandheid"
    },
    {
      text: "Ik vermijd conflicten zoveel mogelijk",
      trait: "Altruïsme",
      dimension: "Harmonie"
    },

    // Consciëntieusheid vragen
    {
      text: "Ik maak altijd plannen voordat ik iets onderneem",
      trait: "Consciëntieusheid",
      dimension: "Organisatie"
    },
    {
      text: "Ik ben punctueel en op tijd",
      trait: "Consciëntieusheid",
      dimension: "Discipline"
    },
    {
      text: "Ik let goed op details",
      trait: "Consciëntieusheid",
      dimension: "Nauwkeurigheid"
    },
    {
      text: "Ik werk systematisch en gestructureerd",
      trait: "Consciëntieusheid",
      dimension: "Methodiek"
    },
    {
      text: "Ik stel doelen voor mezelf en werk er naartoe",
      trait: "Consciëntieusheid",
      dimension: "Ambitie"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [personalityProfile, setPersonalityProfile] = useState(null);

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswers(newAnswers);
    } else {
      calculatePersonalityProfile(newAnswers);
      setCompleted(true);
    }
  };

  const calculatePersonalityProfile = (userAnswers) => {
    const traits = {
      "Extraversie": userAnswers.filter((score, index) => 
        questions[index].trait === "Extraversie").reduce((a, b) => a + b, 0),
      "Neuroticisme": userAnswers.filter((score, index) => 
        questions[index].trait === "Neuroticisme").reduce((a, b) => a + b, 0),
      "Openheid": userAnswers.filter((score, index) => 
        questions[index].trait === "Openheid").reduce((a, b) => a + b, 0),
      "Altruïsme": userAnswers.filter((score, index) => 
        questions[index].trait === "Altruïsme").reduce((a, b) => a + b, 0),
      "Consciëntieusheid": userAnswers.filter((score, index) => 
        questions[index].trait === "Consciëntieusheid").reduce((a, b) => a + b, 0)
    };

    setPersonalityProfile(traits);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
    setPersonalityProfile(null);
  };

  const getPersonalityDescription = (trait, score) => {
    const descriptions = {
      "Extraversie": {
        low: "Je bent meer introvert, houdt van rust en weinig sociale prikkels",
        high: "Je bent zeer sociaal, energiek en geniet van gezelschap"
      },
      "Neuroticisme": {
        low: "Je bent emotioneel stabiel en kalm",
        high: "Je ervaart vaker stress en wisselende emoties"
      },
      "Openheid": {
        low: "Je houdt van bekende paden en traditionele benaderingen",
        high: "Je bent nieuwsgierig, creatief en open voor nieuwe ervaringen"
      },
      "Altruïsme": {
        low: "Je bent eerder rationeel en rechtstreeks in je benadering",
        high: "Je bent zorgzaam, empathisch en begaan met anderen"
      },
      "Consciëntieusheid": {
        low: "Je bent flexibel en spontaan",
        high: "Je bent georganiseerd, gedisciplineerd en doelgericht"
      }
    };

    return score <= 6 ? descriptions[trait].low : descriptions[trait].high;
  };

  if (completed && personalityProfile) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Jouw Persoonlijkheidsprofiel</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.entries(personalityProfile).map(([trait, score]) => (
            <div key={trait} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{trait}</span>
                <span>{score} / 25</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{width: `${(score / 25) * 100}%`}}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {getPersonalityDescription(trait, score)}
              </p>
            </div>
          ))}
          <Button onClick={restartQuiz} className="mt-4 w-full">
            Opnieuw beginnen
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Big Five Persoonlijkheidsquiz</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p>{questions[currentQuestion].text}</p>
          <p className="text-sm text-gray-500 mt-2">
            Vraag {currentQuestion + 1} van {questions.length}
          </p>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((score) => (
            <Button 
              key={score} 
              variant="outline"
              onClick={() => handleAnswer(score)}
            >
              {score}
            </Button>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500">
          1 = Helemaal niet mee eens, 5 = Helemaal mee eens
        </p>
      </CardContent>
    </Card>
  );
};

export default PersonalityQuiz;
