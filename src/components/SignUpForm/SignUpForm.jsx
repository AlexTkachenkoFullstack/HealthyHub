import { useState } from 'react';
import SignUpFirst from './SignUpFirst';
import YourGoal from './YourGoal';
import AgeAndGender from './AgeAndGender';
import BodyParameters from './BodyParameters';
import YourActivity from './YourActivity';
import signUp from './signUp';

const SignUpForm = () => {
  // зберігати у локальний стейт, а на сотанній частині форми зробити submit усіх стейтів
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState('');

  const userRegister = () => {
    signUp(name, email, password, goal, gender, height, weight, age, activity);
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };
  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  return (
    <>
      <div className="container">
        {step === 1 && (
          <div>
            <SignUpFirst
              goNext={handleNextStep}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <YourGoal
              goNext={handleNextStep}
              goBack={handlePrevStep}
              setGoal={setGoal}
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <AgeAndGender
              goNext={handleNextStep}
              goBack={handlePrevStep}
              setAge={setAge}
              setGender={setGender}
            />
          </div>
        )}

        {step === 4 && (
          <div>
            <BodyParameters
              goNext={handleNextStep}
              goBack={handlePrevStep}
              setHeight={setHeight}
              setWeight={setWeight}
            />
          </div>
        )}

        {step === 5 && (
          <div>
            <YourActivity
              goBack={handlePrevStep}
              goNext={handleNextStep}
              setActivity={setActivity}
            />
          </div>
        )}
        {step >= 6 && userRegister()}
      </div>
    </>
  );
};

export default SignUpForm;
