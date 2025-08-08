export type Case = {
    id: string;
    name: string;
    story: string;
    condition: string;
    location: string;
    goal: number;
    raised: number;
    imageUrl: string;
    dataAiHint: string;
  };
  
  export const cases: Case[] = [
    {
      id: '1',
      name: 'Maria S.',
      story: 'Maria is a single mother of two who was recently diagnosed with a rare form of cancer. She needs urgent surgery to remove the tumor, but her insurance won\'t cover the full cost. Your donation can help Maria get the life-saving treatment she needs to be there for her children.',
      condition: 'Leukemia Treatment',
      location: 'New York, NY',
      goal: 50000,
      raised: 22500,
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      dataAiHint: 'woman doctor',
    },
    {
      id: '2',
      name: 'John D.',
      story: 'John, a retired construction worker, requires a critical heart valve replacement. Without it, his prognosis is poor. His pension barely covers his living expenses, let alone this expensive procedure. Let\'s help John get a new lease on life.',
      condition: 'Heart Surgery',
      location: 'Chicago, IL',
      goal: 75000,
      raised: 15000,
      imageUrl: 'https://images.unsplash.com/photo-1551833775-24e64f727f32?w=600&h=400&fit=crop',
      dataAiHint: 'elderly man',
    },
    {
      id: '3',
      name: 'Aisha K.',
      story: 'Aisha is a bright young student who was in a severe car accident. She needs multiple surgeries and extensive physical therapy to walk again. Her family has exhausted their savings. Your support can help Aisha on her long road to recovery.',
      condition: 'Accident Recovery',
      location: 'Los Angeles, CA',
      goal: 30000,
      raised: 25000,
      imageUrl: 'https://images.unsplash.com/photo-1549476464-37392241ea94?w=600&h=400&fit=crop',
      dataAiHint: 'physical therapy',
    },
    {
      id: '4',
      name: 'Baby Leo',
      story: 'Baby Leo was born with a congenital heart defect and needs immediate corrective surgery. His parents are facing immense emotional and financial stress. Help give this little fighter a chance at a healthy life.',
      condition: 'Infant Heart Defect',
      location: 'Houston, TX',
      goal: 120000,
      raised: 95000,
      imageUrl: 'https://images.unsplash.com/photo-1560285026-3453c5897304?w=600&h=400&fit=crop',
      dataAiHint: 'baby hospital',
    },
     {
      id: '5',
      name: 'David L.',
      story: 'David is a teacher and community volunteer who needs a kidney transplant. He has been on the waiting list for months, and the medical bills are piling up. Let\'s support David so he can get back to educating our youth.',
      condition: 'Kidney Transplant',
      location: 'Phoenix, AZ',
      goal: 60000,
      raised: 30000,
      imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
      dataAiHint: 'hospital patient',
    },
    {
      id: '6',
      name: 'Elena R.',
      story: 'Elena, an artist, is battling a debilitating autoimmune disease that requires expensive ongoing treatment. She\'s unable to work, and the cost of medication is overwhelming. Your donation helps her manage her condition and continue creating art.',
      condition: 'Autoimmune Disease',
      location: 'Miami, FL',
      goal: 25000,
      raised: 5000,
      imageUrl: 'https://images.unsplash.com/photo-1590353985784-d621c1a96752?w=600&h=400&fit=crop',
      dataAiHint: 'woman medication',
    },
    {
      id: '7',
      name: 'Samuel "Sam" B.',
      story: 'Sam is a veteran who requires a custom prosthetic leg after a service-related injury. The standard issue prosthetic causes him pain and limits his mobility. A custom-fit one would dramatically improve his quality of life.',
      condition: 'Prosthetic Limb',
      location: 'Denver, CO',
      goal: 18000,
      raised: 17500,
      imageUrl: 'https://images.unsplash.com/photo-1611624548179-c5a8a1834927?w=600&h=400&fit=crop',
      dataAiHint: 'military veteran',
    },
    {
      id: '8',
      name: 'Chloe T.',
      story: 'Young Chloe has severe scoliosis and needs a spinal fusion surgery to prevent further complications. Her family is working hard but needs help to cover the costs of this specialized procedure for their daughter.',
      condition: 'Spinal Surgery',
      location: 'Seattle, WA',
      goal: 45000,
      raised: 11000,
      imageUrl: 'https://images.unsplash.com/photo-1579222248553-c155d13aa8d7?w=600&h=400&fit=crop',
      dataAiHint: 'child surgery',
    },
  ];
  