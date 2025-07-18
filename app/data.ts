// data/projectsData.ts

export interface Project {
    id: string;
    title: string;
    location: string;
    totalArea: string;
    description: string;
    client: string;
    year: number;
    image: string;
    gallery:object;
    work:string
  }
  
  export const projectsData: Project[] = [
    {
      id: "project-001",
      title: "4-bedroom-bungalow",
      location: "Kenya",
      totalArea: "1250 sqm",
      description: "A 4-bedroom flat-roof villa with a study, built using local materials and passive cooling for sustainable, year-round comfort. Designed and constructed with precision.",
      client: "Private Client",
      year: 2023,
      image: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069742/02-Bungalow-Flat-Roof_ixepoy.jpg",
      gallery:{
        hero: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069742/02-Bungalow-Flat-Roof_ixepoy.jpg",
        one: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069513/02-Bungalow-Flat-Roof_l7mgzf.jpg",
        two: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069764/04-Bungalow-Flat-Roof_w2vhxs.jpg",
        three: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069820/18-Bungalow-Flat-Roof_hts1ze.jpg",
        four: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069742/02-Bungalow-Flat-Roof_ixepoy.jpg",
        five: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069753/03-Bungalow-Flat-Roof_soeciw.jpg",
        six: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069803/08-Bungalow-Flat-Roof_l7hfqf.jpg",
        seven: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069816/12-Bungalow-Flat-Roof_ir9wmp.jpg",
        eight: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069798/07-Bungalow-Flat-Roof_ghfx6l.jpg",
        nine: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069777/05-Bungalow-Flat-Roof_onx9je.jpg",
        ten: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069788/06-Bungalow-Flat-Roof_jxb914.jpg",
        eleven: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069819/15-Bungalow-Flat-Roof_bnv4my.jpg",
        twelve: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069506/01-Bungalow-Flat-Roof_cypj2u.jpg",
        thirteen: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069817/13-Bungalow-Flat-Roof_kkrepx.jpg",
        fourteen: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069819/17-Bungalow-Flat-Roof_hxjejq.jpg",
        fifteen: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752069820/16-Bungalow-Flat-Roof_po4vj6.jpg",
        sixteen:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752076880/481044428_1060341926110759_1991500255889645506_n_ic6hbc.jpg",
        seventeen:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752076741/481070923_1060341652777453_6908803224939799222_n_g0knil.jpg"
      },
      work:"Architectural design,construction,Project management,Interior design"

    },
    {
      id: "project-002",
      title: "Nyansiongo-Scheme",
      location: "Kenya",
      totalArea: "1,200 sqm",
      description: "An attic-roof structure designed for optimal space utilization, combining modern minimalist aesthetics with functional layout efficiency.",
      client: "Private client",
      year: 2023,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069508/01-Housing-Nyansiongo-Scheme_f7ejgi.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069746/02-Housing-Nyansiongo-Scheme_hldtgj.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069801/07-Housing-Nyansiongo-Scheme_uodrcr.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069781/05-Housing-Nyansiongo-Scheme_oblg0a.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069792/06-Housing-Nyansiongo-Scheme_qhcznk.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069811/09-Housing-Nyansiongo-Scheme_ewon8k.jpg",
        six:"",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069811/09-Housing-Nyansiongo-Scheme_ewon8k.jpg",
        eight:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069813/10-Housing-Nyansiongo-Scheme_karjgs.jpg",
        nine:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069733/01-Housing-Nyansiongo-Scheme_xogic4.jpg",
        ten:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069809/08-Housing-Nyansiongo-Scheme_pbf7so.jpg",
        eleven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069770/04-Housing-Nyansiongo-Scheme_pc51vm.jpg",
        twelve:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069816/12-Housing-Nyansiongo-Scheme_sru0tx.jpg",
        thirteen:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069822/15-Housing-Nyansiongo-Scheme_mnkmjm.jpg",
        fourteen:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069817/13-Housing-Nyansiongo-Scheme_nbmnmv.jpg",
        fifteen:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069817/11-Housing-Nyansiongo-Scheme_uortvf.jpg",
        sixteen:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069818/14-Housing-Nyansiongo-Scheme_hjmdwr.jpg"
      },
      work:"Architectural design"

    },
    {
      id: "project-004",
      title: "Hilltop Eco Villa",
      location: "Kikambala Beach",
      totalArea: "250 sqm",
      description: "A masterstroke in architectural creativity — this bungalow stuns with its unconventional roofline, seamless spatial flow, and lighting that breathes life into every corner.",
      client: "Private Client",
      year: 2022,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069814/10-Housing-Kikambala_q8ucq2.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069735/01-Housing-Kikambala_uhcnxt.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069807/08-Housing-Kikambala_lctqvj.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069508/01-Housing-Kikambala_tllbsy.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069792/06-Housing-Kikambala_dippvl.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069802/07-Housing-Kikambala_tki0bc.jpg",
        six:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069768/04-Housing-Kikambala_eankqx.jpg",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069745/02-Housing-Kikambala_uwz1gu.jpg",
        eight:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069784/05-Housing-Kikambala_dwgvgy.jpg",
        nine:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069812/09-Housing-Kikambala_m6cexh.jpg",
        ten:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069756/03-Housing-Kikambala_mbhwxu.jpg"
      },
      work:"Architectural design"
    },
        {
      id: "project-006",
      title: "Bungalow",
      location: "Kerarapon, Kiambu",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "private developers",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069814/10-Housing-Kerarapon_l03oex.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069768/04-Housing-Kerarapon_h18g0b.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069743/02-Housing-Kerarapon_pxgvun.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069506/01-Housing-Kerarapon_ign9a9.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069754/03-Housing-Kerarapon_eryws1.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069734/01-Housing-Kerarapon_refnmu.jpg",
        six:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069814/11-Housing-Kerarapon_mbeiio.jpg",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069802/07-Housing-Kerarapon_ekxvg1.jpg",
        eight:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069809/08-Housing-Kerarapon_kvh7py.jpg",
        nine:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069780/05-Housing-Kerarapon_tkdmtf.jpg",
        ten:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069810/09-Housing-Kerarapon_vx9daj.jpg",
        eleven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069792/06-Housing-Kerarapon_aavku7.jpg"
      },
      work:"Architectural design"
    },
        {
      id: "project-007",
      title: "Modern Bungalow",
      location: "Vipingo, Kilifi",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private developers",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069795/06-Housing-Vipingo_mhdigy.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069746/02-Housing-Vipingo_u4f6bs.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069508/01-Housing-Vipingo_rpytt9.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069801/07-Housing-Vipingo_qn2pbf.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069783/05-Housing-Vipingo_sutrpi.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069735/01-Housing-Vipingo_gh4wm9.jpg",
        six:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069757/03-Housing-Vipingo_tzynyt.jpg",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069768/04-Housing-Vipingo_ivlxdu.jpg",
      },
      work:"Architectural design"
    },
    {
      id: "project-020",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752509171/01-Membley_Estate_ss7c1m.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752509179/05-Membley-Estate_qu7jzo.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752509177/04-Membley-Estate_gm24dq.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752509175/03-Membley-Estate_w40uxq.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752509173/02-Membley-Estate_ldbpjb.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752509182/07-Membley-Estate_zdlv8o.jpg",
        six:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752509184/08-Membley-Estate_wru1bb.jpg",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752509185/09-Membley-Estate_f8qezj.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-005",
      title: "Urban Commercial Hub",
      location: "Kenya",
      totalArea: "1,200 sqm",
      description: "A multi-story commercial building optimized for natural light and modular office spaces.",
      client: "Private developers",
      year: 2023,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069513/02-Commercial_guoepz.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069763/04-Commercial_h7pqvb.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069506/01-Commercial_xpfc1d.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069787/06-Commercial_ql7bwt.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069752/03-Commercial_cikz8u.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069804/08-Commercial_wrsxeb.jpg",
        six: "https://res.cloudinary.com/dn40xyabf/image/upload/v1752486556/b71cec07-38f0-4f2f-b4ec-fcec044197b8.png",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752486496/3553eeba-24d7-40bf-b103-f5e96c82c1a5.png"
      },
      work:"Architectural design"
    },
    {
      id: "project-003",
      title: "3-bedroom-bungalow",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "This 3-bedroom bungalow features a functional single-level layout with optimized space planning, offering comfortable living with a focus on practicality and clean design execution.",
      client: "Private Client",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069984/05-3-bedroom-bungalow_hhis0k.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069503/01-3-bedroom-bungalow_lplhis.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069984/04-3-bedroom-bungalow_kwpmss.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069749/03-3-bedroom-bungalow_i8kbxy.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069738/02-3-bedroom-bungalow_nhbowk.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752486652/481055829_1060341939444091_6129126332081186483_n_qnyez7.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-008",
      title: "Flat Roof Maisonette",
      location: "Ruiru, Nairobi",
      totalArea: "250 sqm",
      description: "A 4-bedroom all-ensuite flat-roof maisonette featuring a spacious family room, dedicated laundry area, private gym, and home office. Designed for comfort, efficiency, and modern living.",
      client: "Private Client",
      year: 2022,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069757/03-Housing-Spur-Mall_oafg5y.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069734/01-Housing-Spur-Mall_ncjim0.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069745/02-Housing-Spur-Mall_az0wqk.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069771/04-Housing-Spur-Mall_pevftb.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069786/05-Housing-Spur-Mall_rx4upo.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069508/01-Housing-Spur-Mall_x1kbcn.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-009",
      title: "Urban Residence",
      location: "Juja, Kiambu",
      totalArea: "1,200 sqm",
      description: "A multi-story commercial building optimized for natural light and modular office spaces.",
      client: "Dara Developers Ltd.",
      year: 2023,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069744/02-Housing-Juja_hh2cbd.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069791/06-Housing-Juja_sa3bft.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069781/05-Housing-Juja_kebb48.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069506/01-Housing-Juja_v3lnik.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069766/04-Housing-Juja_ok4ddo.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069732/01-Housing-Juja_udlmq5.jpg",
        six:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069799/07-Housing-Juja_sbsmid.jpg",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069755/03-Housing-Juja_iqzeqm.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-010",
      title: "Residential apartments",
      location: "Satellite Dagoretti, Nairobi",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Muriithi Family",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069799/06-Satellite-Dagoretti_lm2xqg.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069777/04-Satellite-Dagoretti_xxzjhd.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069752/02-Satellite-Dagoretti_bksvbm.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069805/07-Satellite-Dagoretti_edpgxm.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069789/05-Satellite-Dagoretti_djnmrb.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069763/03-Satellite-Dagoretti_cshxmt.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-011",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069785/05-Style-and-Function_q4uakf.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069761/03-Style-and-Function_ee2i0n.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069796/06-Style-and-Function_tv2urt.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069740/01-Style-and-Function_b0uywu.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069807/08-Style-and-Function_drsjqq.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069777/04-Style-and-Function_s9xk3b.jpg",
        six:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069804/07-Style-and-Function_szkhhw.jpg",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069511/01-Style-and-Function_pmfs1v.jpg",
        eight:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069814/09-Style-and-Function_zkujmz.jpg",
        ten:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069816/10-Style-and-Function_w6fnyz.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-012",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069779/05-Flat-Roof_qmigug.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069744/02-Flat-Roof_k8w9dq.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069514/02-Flat-Roof_fnvoqj.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069806/08-Flat-Roof_x8s8ze.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069504/01-Flat-Roof_lkiqp6.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069799/07-Flat-Roof_gvklre.jpg",
        six:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069790/06-Flat-Roof_yofhew.jpg",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069733/01-Flat-Roof_amjcyi.jpg",
        eight:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069752/03-Flat-Roof_aesu1p.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-013",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069797/06-Sunlit-Serenity_alj4ue.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069511/01-Sunlit-Serenity_wjiw0t.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069774/04-Sunlit-Serenity_wcvv4d.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069807/08-Sunlit-Serenity_mieoup.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069785/05-Sunlit-Serenity_dl0txl.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069751/02-Sunlit-Serenity_fnqigw.jpg",
        six:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069803/07-Sunlit-Serenity_ovf7qb.jpg",
        seven:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069762/03-Sunlit-Serenity_s9fpag.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-014",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069505/01-full-Length-window_o8sfo5.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069781/05-full-Length-window_rfkhrt.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069741/02-full-Length-window_wlf6ra.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069765/04-full-Length-window_udzcil.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069735/01-full-Length-window_l30ved.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069790/06-full-Length-window_beth0e.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-015",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069758/03-Mciara_aisonette_uzr420.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069510/01-Mciara-Aisonette_dwzl6y.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069783/05-Mciara_aisonette_pki72w.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069775/04-Mciara_aisonette_rkcufj.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069736/01-Mciara-Aisonette_qpyqoa.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069746/02-Mciara_aisonette_elmwnm.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-016",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069775/04-Residential-Appartments_zxnhkp.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069510/01-Residential-Appartments_skodcm.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069748/02-Residential-Appartments_nvw5ij.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069760/03-Residential-Appartments_akrdfa.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069784/05-Residential-Appartments_bdoozz.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-017",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069772/04-Residential-1-bedrooms_ykbvrl.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069783/05-Residential-1-bedrooms_oxrzbs.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069802/07-Residential-1-bedrooms_twok3y.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069510/01-Residential-1-bedrooms_pvokt7.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069747/02-Residential-1-bedrooms_oquhwe.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-018",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069770/04-Housing-VRoof_flfiif.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069783/05-Housing-VRoof_r5f80f.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069793/06-Housing-VRoof_ec2z29.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069757/03-Housing-VRoof_tg5det.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069747/02-Housing-VRoof_b1npo2.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069509/01-Housing-VRoof_mapfob.jpg"
      },
      work:"Architectural design"
    },
    {
      id: "project-019",
      title: "Residential apartments",
      location: "Kenya",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Private Developer",
      year: 2021,
      image:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069773/04-Style-and-Serenity_brrwda.jpg",
      gallery: {
        one:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069804/07-Style-and-Serenity_qpwp9d.jpg",
        two:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069797/06-Style-and-Serenity_kgsyn5.jpg",
        three:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069760/03-Style-and-Serenity_gvoqlw.jpg",
        four:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069750/02-Style-and-Serenity_mm3ugj.jpg",
        five:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069785/05-Style-and-Serenity_yc7u9p.jpg",
        six:"https://res.cloudinary.com/dn40xyabf/image/upload/v1752069738/01-Style-and-Serenity_zskogl.jpg"
      },
      work:"Architectural design"
    }
  ];
  