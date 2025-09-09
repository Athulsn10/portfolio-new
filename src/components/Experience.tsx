import { Timeline } from 'antd';
import { useEffect, useState } from 'react';

interface ExperienceItem {
  position?: 'left' | 'right';
  children: React.ReactNode;
}

const Experience: React.FC = () => {
  const [totalMonth, setTotalMonth] = useState<string>('');

  const dynamicDate = (inputMonth: number, inputYear: number): string => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const totalMonthsCurrent = currentYear * 12 + currentMonth;
    const totalMonthsInput = inputYear * 12 + inputMonth;
    const monthsSinceInput = totalMonthsCurrent - totalMonthsInput;
    if (monthsSinceInput > 12) {
      const years = Math.floor(monthsSinceInput/12);
      const months = monthsSinceInput % 12;
      return months > 0 ? `${years} yr ${months} mos` : `${years} yrs`  
    }
    return `${monthsSinceInput} mos`;
  };

  useEffect(() => {
    const inputMonth = 3;
    const inputYear = 2024;
    const monthsSinceInput = dynamicDate(inputMonth, inputYear);
    setTotalMonth(monthsSinceInput);
  }, []);

  const items: ExperienceItem[] = [
    {
      children: (
        <>
          <p className='fw-bolder'>Software Engineer</p>
          <p style={{ fontSize: '12px' }}><a className='social-link' target='_blank' href='https://panapps.co/'>Panapps  International Pvt Ltd</a> · Full-time</p>
          <p style={{ fontSize: '12px' }}>Mar 2024 - present · {totalMonth}</p>
          <p style={{ fontSize: '12px' }}>Kochi, Kerala, India · Remote</p>
        </>
      ),
    },
    {
      position: 'left',
      children: (
        <>
          <p className='fw-bolder'>Software Engineer Intern</p>
          <p style={{ fontSize: '12px' }}><a className='social-link' target='_blank' href='https://panapps.co/'>Panapps  International Pvt Ltd</a> · Full-time</p>
          <p style={{ fontSize: '12px' }}>Jan 2024 - Mar 2024 · 3 mos</p>
          <p style={{ fontSize: '12px' }}>Kochi, Kerala, India · Remote</p>
        </>
      ),
    },
    {
      position: 'right',
      children: (
        <>
          <p className='fw-bolder'>MEARN Intern</p>
          <p style={{ fontSize: '12px' }}><a className='social-link' target='_blank' href='https://www.luminartechnolab.com/'>Luminar Technolab</a> · Full-time</p>
          <p style={{ fontSize: '12px' }}>Jun 2023 - Dec 2023 · 7 mos</p>
          <p style={{ fontSize: '12px' }}>Ernakulam, Kerala, India · Remote</p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className='d-flex justify-content-start align-items-center'><p className='guntertest-font fs-3 text-light ms-2 invert-cursor'>EXPERIENCE</p></div>
      <div className='py-1' style={{ overflowY: 'scroll', height: '250px', overflowX: 'hidden' }}>
        <Timeline
          className='invert-cursor'
          style={{ color: '#fff' }}
          mode="alternate"
          items={items}
        />
      </div>
    </>
  );
};

export default Experience;
