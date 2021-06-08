/*
     - godkjenne oppgave
     - registrere opptakssamtale
     - flytte student til modul
     - liste studenter for en bestemt modul
     - liste studenter for et bestemt sted      
*/

const model = {
  app: {
    currentPage: 'interesse',
  },

  inputs: {
    interesse: {
      studentId: 10,
      opptaksprøve: null,
      opptakssamtale: null,
      kursId: 1031,
    },
  },

  forside: [
    {
      linker: [
        'Utdanning',
        'Neste oppstart',
        'Startit/Getit',
        'Om oss',
        'Kontakt',
      ],
      navigasjon: ['Hjem', 'Interesse'],
    },
  ],
  steder: [
    { id: 1, name: 'Oslo' },
    { id: 2, name: 'Larvik' },
  ],
  kurs: [{ id: 1031, name: 'Modul 3', startDato: '2021-05-10' }],
  studenter: [
    {
      id: 10,
      navn: 'Terje',
      fødselsdato: '28.12.95',
      adresse: 'Fogdenget 2, 7020 Trondheim',
      mail: 'Erlend@getacademy.no',
      tlf: '123456789',
      navKontor: 'Nav Lerkendal',
      navVeileder: 'Anita ',
      gjennomførtOpptaksPrøve: null,
      opptaksSamtale: null, // '2021-05-31'
      kurs: null,
      kursHistorikk: [],
      sted: 1,
    },
    {
      id: 1,
      navn: 'Erlend Lien',
      fødselsdato: '28.12.95',
      adresse: 'Fogdenget 2, 7020 Trondheim',
      mail: 'Erlend@getacademy.no',
      tlf: '123456789',
      navKontor: 'Nav Lerkendal',
      navVeileder: 'Anita ',
      gjennomførtOpptaksPrøve: false,
      opptaksSamtale: true,
      modulOppstart: '09.03.2021',
      sendtTilModul: true,
      kurs: 1031,
      kursHistorikk: [1010, 1021, 1022],
    },
    {
      id: 2,
      navn: 'Erlend Lien',
      fødselsdato: '28.12.95',
      adresse: 'Fogdenget 2, 7020 Trondheim',
      mail: 'Erlend@getacademy.no',
      tlf: '123456789',
      navKontor: 'Nav Lerkendal',
      navVeileder: 'Anita ',
      gjennomførtOpptaksPrøve: false,
      opptaksSamtale: true,
      modulOppstart: '09.03.2021',
      sendtTilModul: false,
    },
  ],

  studenterOversikt: [
    {
      studentId: 1,
      nåværendeModul: 2,

      // profilStudent: {
      //     navn: '',
      //     født: '',
      //     adresse: '',
      //     tlf: '',
      //     epost: '',
      //     oppdateringvarsel:'',
      //     redigerstudentview: '',

      //     navKontor: {
      //         Veileder: '',
      //         epost: '',
      //         tlf: '',
      //     }
      // },

      profilStudentDropdown: {
        møter: '',
        raport: '',
        notater: [''],
        oppgaver: [''],
        oblig: ['Oblig 1'],
        oppdateringvarsel: '',
      },
      sted: {
        // radioInput: 'by' ikke ferdig, usikker hvordan jeg henviser riktig
      },
    },
  ],
};
