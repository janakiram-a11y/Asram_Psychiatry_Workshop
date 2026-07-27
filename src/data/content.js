// Content transcribed 1:1 from "ASRAM PSYCHIATRY  ZONAL PG CME  .pdf" (3-page event poster).
// Wording is kept exactly as printed in the source; only line-wrapping and
// spacing were normalized for the web layout.

export const hero = {
  badge: 'Dr NTRUHS, AP, Vijayawada · Psychiatry Zonal PG CME – Zone 2',
  title: 'Neurodevelopmental Landscape:\nAssessment, Intervention and Beyond',
  paragraph: '',
}

export const infoCard = {
  date: '2nd August 2026 (Sunday)',
  timings: '8:00 AM to 5:00 PM',
  venueLine1: 'Hippocrates Hall, General Hospital Block,',
  venueLine2: 'Alluri Sitarama Raju Academy of Medical Sciences, Eluru - 534005',
  keyTakeaway: 'APMC – 2 Credit Hours',
}

export const statBar = {
  credit: { value: '2', unit: 'HRS', title: '2 Credit Hours', caption: 'Allotted by the APMC' },
  notice: 'Scan QR code to pay, Registration is mandatory',
}

// "Key Topics" section (rendered by WhyAttend.jsx) — each card's title is the
// exact session topic from the schedule; description is the exact speaker
// byline for that session (no promotional copy exists in the source PDF).
export const whyAttend = {
  audience: '',
  topics: [
    {
      iconKey: 'sld',
      title: 'SLD – Assessment, Intervention and Supporting Learning',
      description: 'Dr. Sri Vidya — MD, PDF in Child and Adolescent Psychiatry',
    },
    {
      iconKey: 'autism',
      title: 'Autism – From Early Recognition to Comprehensive Management',
      description: 'Dr. Prasanna Kumar — MD, DM Child and Adolescent Psychiatry, Professor & HOD, AMC, Vizag',
    },
    {
      iconKey: 'adhd',
      title: 'ADHD – Assessment, Co-morbidities and Evidence-Based Management',
      description: 'Dr. Sri Vajra Priya — MD, PDF in Child and Adolescent Psychiatry',
    },
    {
      iconKey: 'developmentalDelay',
      title: 'Approach to a Child with Developmental Delay – A Pediatric Perspective',
      description: 'Dr. Ashritha Jonnalagadda — MD Pediatrics, FNDBP',
    },
    {
      iconKey: 'legalEthical',
      title: 'Legal and Ethical Dimensions in Child and Adolescent Mental Health',
      description: 'Dr. Challa S. V. Krishna Vasan — MD, PDCC Diploma in Child Adolescent Psychology',
    },
    {
      iconKey: 'iqTesting',
      title: 'Measuring Intelligence and Adaptive Functioning (Role of IQ Tests and VSMS)',
      description: 'Dr. Deepa Mohan — M.Phil & PhD Clinical Psychology',
    },
  ],
}

export const schedule = {
  titleLine: 'Psychiatry Zonal PG CME – Zone 2',
  venueLine:
    '2nd August 2026 (Sunday). Venue: Hippocrates Hall, General Hospital Block, Alluri Sitarama Raju Academy of Medical Sciences, Eluru',
  formats: [],
  sessions: [
    { type: 'banner', label: '8:00 AM – 9:00 AM | Registration', variant: 'amber' },
    { type: 'banner', label: '9:00 AM – 9:05 AM | Inauguration', variant: 'amber' },
    {
      time: '9:05 AM – 9:15 AM',
      title: 'Introduction',
      speaker: 'Dr Ranjit Kumar\nProfessor & HOD (Dept of Psychiatry)',
    },
    {
      time: '9:15 AM – 10:05 AM',
      title: 'SLD – Assessment, Intervention and Supporting Learning',
      speaker: 'Dr. Sri Vidya\nMD, PDF in Child and Adolescent Psychiatry',
    },
    {
      time: '10:05 AM – 10:55 AM',
      title: 'Autism – From Early Recognition to Comprehensive Management',
      speaker: 'Dr. Prasanna Kumar\nMD, DM Child and Adolescent Psychiatry, Professor & HOD, AMC, Vizag',
    },
    { type: 'banner', label: '10:55 AM – 11:15 AM | Tea Break', variant: 'amber', icon: 'coffee' },
    {
      time: '11:15 AM – 12:05 PM',
      title: 'ADHD – Assessment, Co-morbidities and Evidence-Based Management',
      speaker: 'Dr. Sri Vajra Priya\nMD, PDF in Child and Adolescent Psychiatry',
    },
    {
      time: '12:05 PM – 1:00 PM',
      title: 'Approach to a Child with Developmental Delay – A Pediatric Perspective',
      speaker: 'Dr. Ashritha Jonnalagadda\nMD Pediatrics, FNDBP',
    },
    { type: 'banner', label: '1:00 PM – 2:00 PM | Lunch Break', variant: 'green', icon: 'drumstick' },
    {
      time: '2:00 PM – 2:50 PM',
      title: 'Legal and Ethical Dimensions in Child and Adolescent Mental Health',
      speaker: 'Dr. Challa S. V. Krishna Vasan\nMD, PDCC Diploma in Child Adolescent Psychology',
    },
    {
      time: '2:50 PM – 3:40 PM',
      title: 'Measuring Intelligence and Adaptive Functioning (Role of IQ Tests and VSMS)',
      speaker: 'Dr. Deepa Mohan\nM.Phil & PhD Clinical Psychology',
    },
    {
      time: '3:50 PM – 4:40 PM',
      title: 'Quiz',
      speaker: 'Dr. Chandrahaas, Assistant Professor\nDr Dhatri, Senior Resident\nASRAMS',
    },
    { type: 'banner', label: '4:40 PM – 5:00 PM | Valedictory Function – Dr. M. Manasa, Assistant Professor, ASRAMS', variant: 'red' },
  ],
}

// Faculty roster — names, qualifications and session topics as printed in
// the schedule table (no photos or extended bios are given in the source).
export const speakers = {
  intro: 'Faculty presenting at the Psychiatry Zonal PG CME – Zone 2.',
  list: [
    {
      name: 'Dr Ranjit Kumar',
      position: 'Professor & HOD',
      institution: 'Dept of Psychiatry',
      photo: '/assets/speakers/ranjit-kumar.jpg',
      achievements: ['Session: Introduction'],
    },
    {
      name: 'Dr. Srividya',
      credentials: 'MBBS, MD (Psych), PDF',
      position: 'Child & Adult Psychiatrist',
      institution: 'Consultant Psychiatrist, Santhi Hospitals, Bhimavaram',
      photo: '/assets/speakers/sri-vidya.png',
      achievements: [
        'Session: SLD – Assessment, Intervention and Supporting Learning',
        'Working as Consultant Psychiatrist at Santhi Hospitals, Bhimavaram, since 2019',
        'Experience in assessment and management of child, adolescent, and adult mental health conditions',
        'Cognitive Behavioral Therapy and Dialectical Behavioral Therapy for emotional disorders',
        'Cognitive training for attention and memory problems',
        'School mental health programs and parenting workshops',
        'MD Psychiatry — Pinnamaneni Sidhartha Institute of Medical Sciences',
        'MBBS — Rangaraya Medical College',
        'Fellow in Child and Adolescent Psychiatry',
        'Member of Child and Adolescent Mental Health Committee, AP State Psychiatry Society',
        'Member of Community Awareness Committee, Indian Psychiatry Society South Zone Branch',
        'Email: srividyabellapukonda@gmail.com',
        'Instagram: dr_srividya_psychiatrist',
      ],
    },
    {
      name: 'Dr. N. Prasanna Kumar',
      credentials: 'MD Psychiatry, DM Child and Adolescent Psychiatry',
      position: 'Professor & HOD',
      institution: 'Child and Adolescent Psychiatry Super-speciality Department, Centre of Excellence-GHMC, Andhra Medical College, Visakhapatnam, Andhra Pradesh',
      photo: '/assets/speakers/prasanna-kumar.png',
      achievements: [
        'Session: Autism – From Early Recognition to Comprehensive Management',
        'MD Psychiatry — Andhra Medical College',
        'DM – Child and Adolescent Psychiatry — NIMHANS, Bengaluru',
        'Editor in Chief, Archives of Mental Health',
        'Chairperson, Child and Adolescent Psychiatry Committee, IPS-SZ',
        'Co-Chairperson, Child and Adolescent Psychiatry Committee, IPS',
        'Certified Assessor for ADOS – Gold standard tool for ASD',
        'FAMS — NAMS, New Delhi',
        'Professor of Psychiatry in AMC; past faculty in IMH-Hyderabad',
        'Authored chapters in reputed textbooks of psychiatry and pediatrics',
        'Multiple publications in peer-reviewed journals, including PubMed',
      ],
    },
    {
      name: 'Dr. Sri Vajra Priya Vuyyuru',
      credentials: 'MD, PDF (Child and Adolescent Psychiatry)',
      position: 'Assistant Professor',
      institution: 'NRIGH',
      photo: '/assets/speakers/sri-vajra-priya.jpg',
      achievements: [
        'Session: ADHD – Assessment, Co-morbidities and Evidence-Based Management',
        'Assistant Professor in NRIGH',
        'Publications: Psychiatric morbidity in traumatic brain injury',
      ],
    },
    {
      name: 'Dr. Asritha Jonnalagadda',
      credentials: 'MD (Pediatrics), Fellowship in Neuro Developmental and Behavioural Pediatrics',
      position: 'Developmental and Behavioural Pediatrician',
      institution: 'Abhyasa Child Development and Adolescent Guidance Centre and Anu My Baby Hospitals, Vijayawada',
      photo: '/assets/speakers/asritha-jonnalagadda.jpg',
      achievements: ['Session: Approach to a Child with Developmental Delay – A Pediatric Perspective'],
    },
    {
      name: 'Dr. Challa S V Krishna Vasan',
      credentials: 'MBBS, MD Psychiatry, PDCC (Child and Adolescent Psychiatry)',
      position: 'Consultant Psychiatrist',
      institution:
        'District Mental Health Programme; Consultant Child and Adolescent Psychiatrist, Anurag Special Child Care Unit, Anurag Hospital, Kakinada, Andhra Pradesh',
      photo: '/assets/speakers/challa-krishna-vasan.jpg',
      achievements: [
        'Session: Legal and Ethical Dimensions in Child and Adolescent Mental Health',
        'MBBS — Guntur Medical College, Guntur',
        'MD Psychiatry — Government Hospital for Mental Care (Centre of Excellence in Psychiatry), Andhra Medical College, Visakhapatnam, Andhra Pradesh',
        'PDCC in Child and Adolescent Psychiatry — JIPMER, Puducherry',
        'PGDMLE — National Law School of India University, Bengaluru',
        'PGDCWCR — Sikkim Skill University (currently pursuing)',
        'Diploma in Child and Adolescent Psychology — Acharya Nagarjuna University',
        'Areas of interest: Mood disorders, Forensic Psychiatry, Child and Adolescent Psychiatry, Addiction Medicine',
        'Got Megastar and Superstar title from NPTEL – IIT Madras; first prize in postgraduate quiz competition held by IPS Andhra Pradesh State Branch',
        'Active in academic activities online and offline; trained in 61 professional development certificate courses apart from regular academic training',
        'Runs a WhatsApp group called "Vasan Study Group" to help final year postgraduates and passed-out young psychiatrists prepare for MD/DNB/DM/PDF/PDCC/SR entrance exams',
      ],
    },
    {
      name: 'Dr. N. Deepa Mohan',
      credentials: 'Ph.D. Clinical Neuropsychology (NIMHANS), M.Phil Medical and Social Psychology (NIMHANS)',
      position: 'Consultant Clinical Psychologist',
      institution: 'Dept. of Psychiatry, NRI Medical College and Hospital',
      photo: '/assets/speakers/deepa-mohan.jpg',
      achievements: [
        'Session: Measuring Intelligence and Adaptive Functioning (Role of IQ Tests and VSMS)',
        'Began her career as a Consultant Clinical Psychologist in 1986; has close to 40 years of experience and expertise in Counseling, Psychotherapy and Psychometry',
        'Ph.D. in Clinical Neuropsychology — National Institute of Mental Health and Neuro Sciences (NIMHANS), Bangalore, 1996',
        'M.Phil in Medical and Social Psychology — NIMHANS, First Class',
        'Conducted several workshops for school and college students on Stress and its management, Parenting teenagers, life skills, counselling, etc.',
        'Associated with many organisations and NGOs as an invited resource person for training and capacity-building programs for counsellors',
        'Invited speaker on different topics at various forums in Visakhapatnam and Hyderabad',
        'Publications: Several research papers in national and international journals, including 3 Scopus publications, and 3 book chapters',
        'Guided many post-graduate and doctoral dissertations; 5 candidates have been awarded PhDs',
        'Consultant Clinical Psychologist, Sivananda Neuro and Psychological Centre — handling persons with mental illnesses, behavioural disturbances and lifestyle disturbances in adults, adolescents and children, and psychological assessments',
        'Retired from GITAM University in 2023 as Associate Professor after almost 13½ years; was HOD, Dept. of Applied Psychology, and Program Coordinator for the M.A. Applied Psychology course for 12 years, before her term ended in 2022',
        'Psychological counsellor at IIM Visakhapatnam since its inception in 2015',
        'Currently working at NRI Medical College and Hospital as a Consultant Clinical Psychologist in the Dept. of Psychiatry for the past 2½ years',
        'Personal: Married to a Neurosurgeon; has two children',
      ],
    },
    {
      name: 'Dr. Chandrahaas Kudithipudi',
      credentials: 'MD Psychiatry',
      position: 'Assistant Professor, Consultant',
      institution: 'ASRAMS',
      photo: '/assets/speakers/chandrahaas.jpg',
      achievements: ['Session: Quiz'],
    },
    {
      name: 'Dr. M. Manasa',
      position: 'Assistant Professor',
      institution: 'ASRAMS',
      photo: '/assets/speakers/manasa.jpg',
      achievements: ['Session: Valedictory Function'],
    },
  ],
}

export const patrons = {
  intro: 'Recognizing the esteemed institutional leadership and distinguished guests supporting this workshop initiative.',
  chiefPatrons: [
    { name: 'Sri Gokaraju Gangaraju', role: 'Chairman, ASRAM', photo: '/assets/patrons/gokaraju-gangaraju.png' },
    { name: 'Sri Gokaraju Rangaraju', role: 'Director, ASRAMS', photo: '/assets/patrons/gokaraju-rangaraju.png' },
    { name: 'Sri Gokaraju Ramaraju', role: 'Director, ASRAMS', photo: '/assets/patrons/gokaraju-ramaraju.png' },
    { name: 'Smt. Rathi Devi', role: 'Director, ASRAMS', photo: '/assets/patrons/rathi-devi.png' },
  ],
  guestsOfHonour: [
    { name: 'Dr. K. Anji Reddy', role: 'Medical Director, ASRAM', photo: '/assets/guests/anji-reddy.png' },
    { name: 'Dr. Srinivas Chebrolu', role: 'Principal, ASRAM', photo: '/assets/guests/srinivas-chebrolu.png' },
    { name: 'Dr. K. Hanumantha Rao', role: 'CEO, ASRAM', photo: '/assets/guests/hanumantha-rao.png' },
    { name: 'Dr. K. Santhaiah', role: 'Superintendent, ASRAM', photo: '/assets/guests/santhaiah.png' },
    { name: 'Dr. V. Siva Prabodh', role: 'Dean - (Admin.), ASRAM', photo: '/assets/guests/siva-prabodh.png' },
    { name: 'Dr. Venu Gopala Raju.S', role: 'Dean - (Academic) ASRAM', photo: '/assets/guests/venu-gopala-raju.png' },
  ],
}

// Fields mirror the official Google Form used for registration exactly
// (same labels, same order, same options) — verified against screenshots
// of the live form.
export const registration = {
  heading: 'Registration Details',
  formTitle: 'Register',
  panelTitle: 'Secure Your Spot',
  panelDescription: 'Fill in your details to register for the Psychiatry Zonal PG CME – Zone 2.',
  benefits: [
    'Full Access to All Sessions',
    '2 APMC Credit Hours',
    'Tea & Lunch Included',
    'Interactive Quiz Session',
  ],
  designations: [
    { key: 'pg1', label: 'First Year Post Graduate', fee: 100 },
    { key: 'pg2', label: 'Second Year Post Graduate', fee: 100 },
    { key: 'pg3', label: 'Third Year Post Graduate', fee: 100 },
    { key: 'faculty', label: 'Faculty', fee: 300 },
    { key: 'other', label: 'Other', fee: null },
  ],
  mealPreferences: [
    { key: 'veg', label: 'Vegetarian' },
    { key: 'nonveg', label: 'Non-Vegetarian' },
  ],
  quizOptions: [
    { key: 'yes', label: 'Yes' },
    { key: 'no', label: 'No' },
  ],
  paymentNote: 'Scan the QR code to pay via UPI, then enter your transaction ID below.',
  link: 'https://forms.gle/D8osCdzUS8RPkmjo6',
  linkLabel: 'Proceed to Register',
  linkNote: "You'll pay via UPI and upload your payment screenshot in the next step.",
  modalTitle: 'Complete Your Payment',
  modalNote:
    "You'll be redirected to our official Google Form to complete registration — please attach this screenshot there as well.",
  confirmTitle: 'Almost done!',
  confirmNote:
    'Your registration form has opened in a new tab. Please attach your payment screenshot there to finish registering.',
  upiId: 'kilimharshinihrudhya@ybl',
  qrImage: '/assets/registration-qr.png',
}

export const contact = {
  intro: 'For queries contact:',
  name: 'Dr Swathi',
  titleLines: ['Senior Resident'],
  email: '',
  phone: '8074222048',
  address: 'Hippocrates Hall, General Hospital Block, Alluri Sitarama Raju Academy of Medical Sciences, Eluru - 534005',
  mapEmbedSrc: 'https://www.google.com/maps?q=ASRAM+HOSPITALS+Eluru&output=embed',
  mapsLink:
    'https://www.google.com/maps/place/ASRAM+HOSPITALS/@16.7364937,81.141033,944m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a366ab8f620fbb5:0xc457b03853e3e086!8m2!3d16.7364937!4d81.1436079!16s%2Fg%2F1tz74d5l',
}
