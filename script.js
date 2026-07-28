"use strict";

/*
  ROTARACT CLUB OF KITALE ANNUAL PLAN — 2026/2027
  ------------------------------------------------
  The calendar below was imported from:
  RotaractClub_of_Kitale_Annual_Plan_2026-2027.xlsx

  To edit an activity, update its object in clubEvents.
  Dates use YYYY-MM-DD.
*/
const clubEvents = [
  {
    "id": "event-2026-07-04-new-rotary-year-kickoff-committee-alignment-1",
    "date": "2026-07-04",
    "title": "New Rotary Year Kickoff & Committee Alignment",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Light Saturday fellowship to confirm committees, dues culture, member expectations and installation action items.",
    "status": "Planned",
    "theme": "Transition Month",
    "focus": "Club Administration / Membership",
    "lead": "President, Secretary, Membership",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-07-09-second-thursday-book-club-2",
    "date": "2026-07-09",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Transition Month",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-07-11-installation-preparation-fellowship-3",
    "date": "2026-07-11",
    "title": "Installation Preparation Fellowship",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Walk through installation roles, program flow, guest list and PR countdown.",
    "status": "Planned",
    "theme": "Transition Month",
    "focus": "Club Administration",
    "lead": "Installation Committee / PR",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-07-18-installation-induction-4",
    "date": "2026-07-18",
    "title": "Installation & Induction",
    "category": "membership",
    "time": "Time to be confirmed",
    "location": "Physical venue to be confirmed",
    "description": "Official installation, induction, annual vision launch and member value promise.",
    "status": "Planned",
    "theme": "Transition Month",
    "focus": "Membership / Leadership",
    "lead": "Board / Installation Committee",
    "format": "Physical event"
  },
  {
    "id": "event-2026-07-25-post-installation-chill-annual-plan-launch-5",
    "date": "2026-07-25",
    "title": "Post-Installation Chill & Annual Plan Launch",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "A fun, low-pressure fellowship to review the year plan and make members feel part of the journey.",
    "status": "Planned",
    "theme": "Transition Month",
    "focus": "Fellowship / Retention",
    "lead": "Club Service / Membership",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-07-31-monthly-club-assembly-6",
    "date": "2026-07-31",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Transition Month",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2026-08-01-bring-a-friend-fellowship-7",
    "date": "2026-08-01",
    "title": "Bring-a-Friend Fellowship",
    "category": "membership",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Launch membership month with a friendly fellowship where every member invites one potential member.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Membership & Extension",
    "lead": "Membership / PR",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-08-03-monthly-board-meeting-8",
    "date": "2026-08-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2026-08-06-first-thursday-dei-online-fellowship-9",
    "date": "2026-08-06",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-08-08-rotaract-101-club-value-session-10",
    "date": "2026-08-08",
    "title": "Rotaract 101 & Club Value Session",
    "category": "membership",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Explain dues, happy/sad dollars, club culture, leadership opportunities, and why members should stay active.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Membership & Extension",
    "lead": "Membership / Club Admin",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-08-13-second-thursday-book-club-11",
    "date": "2026-08-13",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-08-15-member-skills-strengths-mapping-12",
    "date": "2026-08-15",
    "title": "Member Skills & Strengths Mapping",
    "category": "membership",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Map members’ skills, interests and availability so committees use members well without burning them out.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Membership / Retention",
    "lead": "Membership / Professional Development",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-08-20-third-thursday-kahoot-online-game-night-13",
    "date": "2026-08-20",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-08-22-fun-day-mbuzi-hangout-or-games-fellowship-14",
    "date": "2026-08-22",
    "title": "Fun Day: Mbuzi/Hangout or Games Fellowship",
    "category": "fellowship",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "A bonding day to make the club social, youthful and enjoyable.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Fellowship / Retention",
    "lead": "Club Service",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-08-27-last-thursday-professional-development-online-15",
    "date": "2026-08-27",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-08-28-monthly-club-assembly-16",
    "date": "2026-08-28",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2026-08-29-committee-work-sprint-17",
    "date": "2026-08-29",
    "title": "Committee Work Sprint",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Each committee presents its small plan for the next 90 days and picks clear owners.",
    "status": "Planned",
    "theme": "Membership & Extension",
    "focus": "Leadership / Planning",
    "lead": "President / Board",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-09-03-monthly-board-meeting-18",
    "date": "2026-09-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2026-09-03-first-thursday-dei-online-fellowship-19",
    "date": "2026-09-03",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-09-05-boma-high-school-baseline-visit-20",
    "date": "2026-09-05",
    "title": "Boma High School Baseline Visit",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Partner school",
    "description": "School visit to assess computer project needs, Interact Club support and education gaps.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "Basic Education & Literacy",
    "lead": "Projects / Rotary Kitale Liaison",
    "format": "School visit"
  },
  {
    "id": "event-2026-09-10-second-thursday-book-club-21",
    "date": "2026-09-10",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-09-12-coding-hour-facilitator-training-22",
    "date": "2026-09-12",
    "title": "Coding Hour Facilitator Training",
    "category": "learning",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Train Rotaractors to run unplugged coding activities without needing laptops.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "Education / Digital Skills",
    "lead": "Professional Development / Projects",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-09-17-third-thursday-kahoot-online-game-night-23",
    "date": "2026-09-17",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-09-19-walk-in-the-school-1-unplugged-coding-24",
    "date": "2026-09-19",
    "title": "Walk in the School #1: Unplugged Coding",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Partner school",
    "description": "Rotaractors visit a school to guide learners through problem-solving, critical thinking, teamwork and creativity activities.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "Basic Education & Literacy",
    "lead": "Projects / Professional Development",
    "format": "School visit"
  },
  {
    "id": "event-2026-09-24-last-thursday-professional-development-online-25",
    "date": "2026-09-24",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-09-25-monthly-club-assembly-26",
    "date": "2026-09-25",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2026-09-26-education-mentorship-book-resource-drive-27",
    "date": "2026-09-26",
    "title": "Education Mentorship & Book/Resource Drive",
    "category": "service",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Mentorship fellowship plus collection of books/resources for partner schools.",
    "status": "Planned",
    "theme": "Basic Education & Literacy",
    "focus": "Basic Education & Literacy",
    "lead": "Projects / Club Service",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-10-01-first-thursday-dei-online-fellowship-28",
    "date": "2026-10-01",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-10-03-monthly-board-meeting-29",
    "date": "2026-10-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2026-10-03-community-needs-fundraising-planning-30",
    "date": "2026-10-03",
    "title": "Community Needs & Fundraising Planning",
    "category": "fundraising",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Plan community development support and fundraising for education/health outreach.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Economic and Community Development",
    "lead": "Projects / Finance",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-10-08-second-thursday-book-club-31",
    "date": "2026-10-08",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-10-10-coding-hour-school-childrens-home-visit-2-32",
    "date": "2026-10-10",
    "title": "Coding Hour School/Children’s Home Visit #2",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Partner school",
    "description": "Visit Shimo La Tewa, Kwetu Nyumbani or another selected institution for unplugged coding and mentorship.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Education / Community Development",
    "lead": "Projects / Professional Development",
    "format": "School/children's home visit"
  },
  {
    "id": "event-2026-10-15-third-thursday-kahoot-online-game-night-33",
    "date": "2026-10-15",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-10-17-physical-professional-development-saturday-34",
    "date": "2026-10-17",
    "title": "Physical Professional Development Saturday",
    "category": "learning",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "A practical session on public speaking, personal branding or project management for members.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-10-24-fundraising-partnerships-fellowship-35",
    "date": "2026-10-24",
    "title": "Fundraising & Partnerships Fellowship",
    "category": "fundraising",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Build support for Boma, medical camps, Coding Hour and Loki outreach.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Economic and Community Development",
    "lead": "Finance / Projects / PR",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-10-29-last-thursday-professional-development-online-36",
    "date": "2026-10-29",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-10-30-monthly-club-assembly-37",
    "date": "2026-10-30",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2026-10-31-fun-day-outdoor-hangout-or-friendly-sports-38",
    "date": "2026-10-31",
    "title": "Fun Day: Outdoor Hangout or Friendly Sports",
    "category": "fellowship",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "A light social activity to keep the month from feeling too project-heavy.",
    "status": "Planned",
    "theme": "Economic & Community Development",
    "focus": "Fellowship / Retention",
    "lead": "Club Service",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-11-03-monthly-board-meeting-39",
    "date": "2026-11-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2026-11-05-first-thursday-dei-online-fellowship-40",
    "date": "2026-11-05",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-11-07-rotary-foundation-learning-fellowship-41",
    "date": "2026-11-07",
    "title": "Rotary Foundation Learning Fellowship",
    "category": "learning",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Members learn how TRF, grants and partnerships can support stronger projects.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "The Rotary Foundation",
    "lead": "Foundation / Club Admin",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-11-12-second-thursday-book-club-42",
    "date": "2026-11-12",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-11-14-tree-planting-environmental-education-school-visit-43",
    "date": "2026-11-14",
    "title": "Tree Planting + Environmental Education School Visit",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Partner school",
    "description": "Continue the club’s tree planting culture with a school-based environmental education angle.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "Environment / Education",
    "lead": "Projects / Environment",
    "format": "School visit"
  },
  {
    "id": "event-2026-11-19-third-thursday-kahoot-online-game-night-44",
    "date": "2026-11-19",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-11-21-project-documentation-storytelling-day-45",
    "date": "2026-11-21",
    "title": "Project Documentation & Storytelling Day",
    "category": "fundraising",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Package club impact stories, photos and proposals for partners and sponsors.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "PR / Foundation",
    "lead": "PR / Secretary / Projects",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-11-26-last-thursday-professional-development-online-46",
    "date": "2026-11-26",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-11-27-monthly-club-assembly-47",
    "date": "2026-11-27",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2026-11-28-partner-appreciation-fellowship-48",
    "date": "2026-11-28",
    "title": "Partner Appreciation & Fellowship",
    "category": "fellowship",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Appreciate Rotarians, partners and members supporting the year’s projects.",
    "status": "Planned",
    "theme": "The Rotary Foundation",
    "focus": "Partnerships / Fellowship",
    "lead": "President / PR / Club Service",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-12-03-monthly-board-meeting-49",
    "date": "2026-12-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2026-12-03-first-thursday-dei-online-fellowship-50",
    "date": "2026-12-03",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-12-05-medical-camp-planning-with-rotary-kitale-51",
    "date": "2026-12-05",
    "title": "Medical Camp Planning with Rotary Kitale",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Plan medical camp roles, hygiene education approach, partner mobilization and target community.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "Disease Prevention and Treatment",
    "lead": "Projects / Rotary Kitale Liaison",
    "format": "5:30 PM"
  },
  {
    "id": "event-2026-12-10-second-thursday-book-club-52",
    "date": "2026-12-10",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-12-12-holiday-hangout-secret-santa-53",
    "date": "2026-12-12",
    "title": "Holiday Hangout + Secret Santa",
    "category": "fellowship",
    "time": "Time to be confirmed",
    "location": "Venue to be confirmed",
    "description": "Fun fellowship to close the year with bonding, gratitude and a light impact recap.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "Fellowship / Retention",
    "lead": "Club Service / PR",
    "format": "Fun day"
  },
  {
    "id": "event-2026-12-17-third-thursday-kahoot-online-game-night-54",
    "date": "2026-12-17",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2026-12-18-monthly-club-assembly-55",
    "date": "2026-12-18",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2026-12-19-community-hygiene-education-outreach-56",
    "date": "2026-12-19",
    "title": "Community Hygiene Education Outreach",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Community venue",
    "description": "A light health/hygiene education outreach before the holidays, linked to future medical camps.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "Disease Prevention / Hygiene",
    "lead": "Projects / Health Team",
    "format": "Community outreach"
  },
  {
    "id": "event-2026-12-26-no-heavy-meeting-family-time-online-check-in-57",
    "date": "2026-12-26",
    "title": "No Heavy Meeting: Family Time / Online Check-in",
    "category": "membership",
    "time": "Time to be confirmed",
    "location": "Venue to be confirmed",
    "description": "Keep the calendar humane during the holiday period; optional online check-in only.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "Member Care",
    "lead": "Club Service",
    "format": "Optional"
  },
  {
    "id": "event-2026-12-31-last-thursday-professional-development-online-58",
    "date": "2026-12-31",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Disease Prevention & Treatment",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-01-02-new-year-reset-fellowship-59",
    "date": "2027-01-02",
    "title": "New Year Reset Fellowship",
    "category": "fellowship",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Re-energize members, review dues, attendance, project priorities and DCA savings.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Vocational Service / Club Admin",
    "lead": "Board / Membership",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-01-03-monthly-board-meeting-60",
    "date": "2027-01-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2027-01-07-first-thursday-dei-online-fellowship-61",
    "date": "2027-01-07",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-01-09-professional-development-workshop-62",
    "date": "2027-01-09",
    "title": "Professional Development Workshop",
    "category": "learning",
    "time": "Time to be confirmed",
    "location": "Physical venue to be confirmed",
    "description": "Skill-building session on CVs, interviews, public speaking, AI tools or financial literacy.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Vocational Service",
    "lead": "Professional Development",
    "format": "Physical PD"
  },
  {
    "id": "event-2027-01-14-second-thursday-book-club-63",
    "date": "2027-01-14",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-01-16-career-mentorship-with-rotarians-64",
    "date": "2027-01-16",
    "title": "Career Mentorship with Rotarians",
    "category": "learning",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Rotarians mentor Rotaractors on careers, business, service leadership and networks.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Vocational Service",
    "lead": "Professional Development / Rotary Liaison",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-01-21-third-thursday-kahoot-online-game-night-65",
    "date": "2027-01-21",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-01-23-coding-hour-train-the-trainer-refresh-66",
    "date": "2027-01-23",
    "title": "Coding Hour Train-the-Trainer Refresh",
    "category": "learning",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Prepare a second group of Rotaractors to run school-based creative problem-solving activities.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Vocational / Education Skills",
    "lead": "Professional Development / Projects",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-01-28-last-thursday-professional-development-online-67",
    "date": "2027-01-28",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-01-29-monthly-club-assembly-68",
    "date": "2027-01-29",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2027-01-30-vocational-visit-farm-or-business-hangout-69",
    "date": "2027-01-30",
    "title": "Vocational Visit / Farm or Business Hangout",
    "category": "learning",
    "time": "Time to be confirmed",
    "location": "Venue to be confirmed",
    "description": "A fun vocational visit to learn from a local business/farm while bonding as members.",
    "status": "Planned",
    "theme": "Vocational Service",
    "focus": "Vocational Service / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Fun vocational visit"
  },
  {
    "id": "event-2027-02-03-monthly-board-meeting-70",
    "date": "2027-02-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2027-02-04-first-thursday-dei-online-fellowship-71",
    "date": "2027-02-04",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-02-06-peace-leadership-dialogue-72",
    "date": "2027-02-06",
    "title": "Peace & Leadership Dialogue",
    "category": "learning",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "A discussion on conflict resolution, communication and servant leadership within clubs and communities.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "Peace and Conflict Prevention/Resolution",
    "lead": "Club Admin / Professional Development",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-02-11-second-thursday-book-club-73",
    "date": "2027-02-11",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-02-13-walk-in-the-school-3-teamwork-peace-activities-74",
    "date": "2027-02-13",
    "title": "Walk in the School #3: Teamwork & Peace Activities",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Partner school",
    "description": "Use unplugged activities to teach collaboration, problem-solving and conflict resolution to learners.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "Peace / Education",
    "lead": "Projects / Professional Development",
    "format": "School visit"
  },
  {
    "id": "event-2027-02-18-third-thursday-kahoot-online-game-night-75",
    "date": "2027-02-18",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-02-20-interact-peace-project-planning-76",
    "date": "2027-02-20",
    "title": "Interact Peace Project Planning",
    "category": "service",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Work with Interactors to design a small peace, kindness or anti-bullying activity.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "Peace / Youth",
    "lead": "Youth Service / Projects",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-02-25-last-thursday-professional-development-online-77",
    "date": "2027-02-25",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-02-26-monthly-club-assembly-78",
    "date": "2027-02-26",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2027-02-27-fun-fellowship-game-night-physical-edition-79",
    "date": "2027-02-27",
    "title": "Fun Fellowship: Game Night Physical Edition",
    "category": "fellowship",
    "time": "Time to be confirmed",
    "location": "Venue to be confirmed",
    "description": "A lighter Saturday to support retention and member bonding.",
    "status": "Planned",
    "theme": "Peacebuilding & Conflict Prevention",
    "focus": "Fellowship / Retention",
    "lead": "Club Service",
    "format": "Fun day"
  },
  {
    "id": "event-2027-03-03-monthly-board-meeting-80",
    "date": "2027-03-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2027-03-04-first-thursday-dei-online-fellowship-81",
    "date": "2027-03-04",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-03-06-wash-needs-assessment-school-visit-82",
    "date": "2027-03-06",
    "title": "WASH Needs Assessment School Visit",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Partner school",
    "description": "Assess school hygiene, sanitation education needs and possible support areas.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "Water and Sanitation",
    "lead": "Projects / WASH Team",
    "format": "School visit"
  },
  {
    "id": "event-2027-03-11-second-thursday-book-club-83",
    "date": "2027-03-11",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-03-13-hygiene-education-sanitary-dignity-outreach-84",
    "date": "2027-03-13",
    "title": "Hygiene Education & Sanitary Dignity Outreach",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Partner school",
    "description": "Deliver hygiene education, menstrual dignity awareness and handwashing messages.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "Water and Sanitation",
    "lead": "Projects / Health Team",
    "format": "School/community outreach"
  },
  {
    "id": "event-2027-03-18-third-thursday-kahoot-online-game-night-85",
    "date": "2027-03-18",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-03-20-world-rotaract-week-celebration-86",
    "date": "2027-03-20",
    "title": "World Rotaract Week Celebration",
    "category": "fellowship",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Celebrate Rotaract identity, member stories, exchange connections and district engagement.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "Rotaract Learning / Fellowship",
    "lead": "PR / Club Service",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-03-25-last-thursday-professional-development-online-87",
    "date": "2027-03-25",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-03-26-monthly-club-assembly-88",
    "date": "2027-03-26",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2027-03-27-water-conservation-tree-care-follow-up-89",
    "date": "2027-03-27",
    "title": "Water Conservation + Tree Care Follow-up",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Venue to be confirmed",
    "description": "Follow up tree planting and run a light water conservation activity with a school/community.",
    "status": "Planned",
    "theme": "Water, Sanitation & Hygiene",
    "focus": "WASH / Environment",
    "lead": "Projects / Environment",
    "format": "Service day"
  },
  {
    "id": "event-2027-04-01-first-thursday-dei-online-fellowship-90",
    "date": "2027-04-01",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-04-03-monthly-board-meeting-91",
    "date": "2027-04-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2027-04-03-medical-camp-final-planning-92",
    "date": "2027-04-03",
    "title": "Medical Camp Final Planning",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Finalize logistics for Rotary Kitale medical camp: venue, roles, hygiene education, referrals and supplies.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "Maternal and Child Health",
    "lead": "Projects / Rotary Kitale Liaison",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-04-08-second-thursday-book-club-93",
    "date": "2027-04-08",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-04-10-medical-camp-with-rotary-kitale-94",
    "date": "2027-04-10",
    "title": "Medical Camp with Rotary Kitale",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Venue to be confirmed",
    "description": "Collaborative medical camp with hygiene education, basic screening and community health education.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "Maternal and Child Health / Disease Prevention",
    "lead": "Projects / Rotary Kitale / Health Partners",
    "format": "Major project"
  },
  {
    "id": "event-2027-04-15-third-thursday-kahoot-online-game-night-95",
    "date": "2027-04-15",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-04-17-medical-camp-debrief-impact-documentation-96",
    "date": "2027-04-17",
    "title": "Medical Camp Debrief & Impact Documentation",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Review outcomes, lessons, photos, expenses and follow-up needs after the medical camp.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "Impact / Accountability",
    "lead": "Projects / Secretary / PR",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-04-24-family-of-rotary-health-fun-fellowship-97",
    "date": "2027-04-24",
    "title": "Family of Rotary Health & Fun Fellowship",
    "category": "fellowship",
    "time": "Time to be confirmed",
    "location": "Venue to be confirmed",
    "description": "A relaxed Rotary-family fellowship with light health, wellness and bonding activities.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "Fellowship / Health",
    "lead": "Club Service / Rotary Liaison",
    "format": "Fun day"
  },
  {
    "id": "event-2027-04-29-last-thursday-professional-development-online-98",
    "date": "2027-04-29",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-04-30-monthly-club-assembly-99",
    "date": "2027-04-30",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Maternal & Child Health",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2027-05-01-youth-service-month-launch-100",
    "date": "2027-05-01",
    "title": "Youth Service Month Launch",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Launch youth-focused month with mentorship goals, Coding Hour schedule and Interact support.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Youth Service",
    "lead": "Youth Service / Projects",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-05-03-monthly-board-meeting-101",
    "date": "2027-05-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2027-05-06-first-thursday-dei-online-fellowship-102",
    "date": "2027-05-06",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-05-08-coding-hour-youth-service-visit-103",
    "date": "2027-05-08",
    "title": "Coding Hour Youth Service Visit",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Partner school",
    "description": "Run unplugged coding, creativity, critical thinking and teamwork activities with learners.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Youth Service / Education",
    "lead": "Professional Development / Projects",
    "format": "School visit"
  },
  {
    "id": "event-2027-05-13-second-thursday-book-club-104",
    "date": "2027-05-13",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-05-15-interact-mentorship-sports-fun-day-105",
    "date": "2027-05-15",
    "title": "Interact Mentorship + Sports/Fun Day",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Partner school",
    "description": "Mentorship, leadership, games and bonding with Interactors or partner youth group.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Youth Service / Fellowship",
    "lead": "Youth Service / Club Service",
    "format": "School/youth fun day"
  },
  {
    "id": "event-2027-05-20-third-thursday-kahoot-online-game-night-106",
    "date": "2027-05-20",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-05-22-leadership-pipeline-handover-prep-107",
    "date": "2027-05-22",
    "title": "Leadership Pipeline & Handover Prep",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Identify upcoming leaders, document lessons, and begin smooth handover planning.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Leadership Development",
    "lead": "President / Secretary / Board",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-05-27-last-thursday-professional-development-online-108",
    "date": "2027-05-27",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-05-28-monthly-club-assembly-109",
    "date": "2027-05-28",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2027-05-29-youth-showcase-creative-coding-exhibition-110",
    "date": "2027-05-29",
    "title": "Youth Showcase / Creative Coding Exhibition",
    "category": "service",
    "time": "Time to be confirmed",
    "location": "Venue to be confirmed",
    "description": "Celebrate learners’ teamwork, creativity and problem-solving through small project showcases.",
    "status": "Planned",
    "theme": "Youth Service",
    "focus": "Youth Service / Education",
    "lead": "Projects / PR / Youth Service",
    "format": "Showcase"
  },
  {
    "id": "event-2027-06-03-monthly-board-meeting-111",
    "date": "2027-06-03",
    "title": "Monthly Board Meeting",
    "category": "administration",
    "time": "8:30 PM",
    "location": "Online",
    "description": "Board meeting on the 3rd of the month to review action tracker, finances, members, projects and upcoming activities.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "Club Administration",
    "lead": "President / Board",
    "format": "Online, 8:30 PM"
  },
  {
    "id": "event-2027-06-03-first-thursday-dei-online-fellowship-112",
    "date": "2027-06-03",
    "title": "First Thursday: DEI Online Fellowship",
    "category": "membership",
    "time": "8:00 PM",
    "location": "Online",
    "description": "DEI online fellowship to build inclusion, belonging and safe participation in the club.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "DEI / Member Care",
    "lead": "DEI Lead / Membership",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-06-05-fellowship-month-launch-club-appreciation-113",
    "date": "2027-06-05",
    "title": "Fellowship Month Launch & Club Appreciation",
    "category": "fellowship",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Celebrate members, partners, friendships and service memories from the year.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "Rotary Fellowships",
    "lead": "Club Service / PR",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-06-10-second-thursday-book-club-114",
    "date": "2027-06-10",
    "title": "Second Thursday: Book Club",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Book club discussion; rotate personal growth, leadership, Rotaract/service and Kenyan/community themes.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "Learning / Fellowship",
    "lead": "Club Service / Professional Development",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-06-12-club-exchange-twinning-activity-115",
    "date": "2027-06-12",
    "title": "Club Exchange / Twinning Activity",
    "category": "fellowship",
    "time": "Time to be confirmed",
    "location": "Online or partner club venue",
    "description": "Online or physical exchange with another Rotaract club to build international/local connections.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "Rotary Fellowships / International Service",
    "lead": "International Service / PR",
    "format": "Exchange"
  },
  {
    "id": "event-2027-06-17-third-thursday-kahoot-online-game-night-116",
    "date": "2027-06-17",
    "title": "Third Thursday: Kahoot / Online Game Night",
    "category": "fellowship",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Kahoot/game night to learn Rotaract, Rotary, district updates and Kenyan current happenings in a fun way.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "Fellowship / Rotaract Learning",
    "lead": "Club Service / PR",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-06-19-final-impact-report-awards-fellowship-117",
    "date": "2027-06-19",
    "title": "Final Impact Report & Awards Fellowship",
    "category": "administration",
    "time": "5:30 PM",
    "location": "Venue to be confirmed",
    "description": "Share annual impact, recognize active members and committees, and close reporting gaps.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "Accountability / Fellowship",
    "lead": "Secretary / PR / Finance",
    "format": "5:30 PM"
  },
  {
    "id": "event-2027-06-24-last-thursday-professional-development-online-118",
    "date": "2027-06-24",
    "title": "Last Thursday: Professional Development Online",
    "category": "learning",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Monthly professional development session unless a physical Saturday session is planned; focus on practical life, career, leadership and project skills.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "Professional Development",
    "lead": "Professional Development Committee",
    "format": "Online, 8:00 PM"
  },
  {
    "id": "event-2027-06-25-monthly-club-assembly-119",
    "date": "2027-06-25",
    "title": "Monthly Club Assembly",
    "category": "administration",
    "time": "8:00 PM",
    "location": "Online",
    "description": "Online club assembly to update members, receive committee reports, discuss dues, share decisions and keep transparency.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "Club Administration / Accountability",
    "lead": "President / Secretary / Directors",
    "format": "Online, Friday 8:00 PM"
  },
  {
    "id": "event-2027-06-26-handover-end-year-celebration-120",
    "date": "2027-06-26",
    "title": "Handover & End-Year Celebration",
    "category": "fellowship",
    "time": "Time to be confirmed",
    "location": "Venue to be confirmed",
    "description": "Celebrate the year, hand over files, bless incoming leadership and keep the club culture alive.",
    "status": "Planned",
    "theme": "Rotary Fellowships",
    "focus": "Rotary Fellowships / Continuity",
    "lead": "Board / Club Service",
    "format": "Celebration"
  }
];

const monthlyThemes = [
  {
    "key": "2026-07",
    "label": "July 2026",
    "theme": "Transition Month",
    "description": "Begin the Rotary year with installation, committee alignment, clear expectations, and a shared annual plan.",
    "eventCount": 6
  },
  {
    "key": "2026-08",
    "label": "August 2026",
    "theme": "Membership & Extension",
    "description": "Welcome new people, strengthen belonging, and help every member discover where they can contribute.",
    "eventCount": 11
  },
  {
    "key": "2026-09",
    "label": "September 2026",
    "theme": "Basic Education & Literacy",
    "description": "Support schools through mentorship, learning resources, facilitator training, and unplugged coding activities.",
    "eventCount": 10
  },
  {
    "key": "2026-10",
    "label": "October 2026",
    "theme": "Economic & Community Development",
    "description": "Grow practical skills, community partnerships, fundraising readiness, and sustainable project support.",
    "eventCount": 11
  },
  {
    "key": "2026-11",
    "label": "November 2026",
    "theme": "The Rotary Foundation",
    "description": "Learn about The Rotary Foundation while documenting impact, appreciating partners, and serving the environment.",
    "eventCount": 10
  },
  {
    "key": "2026-12",
    "label": "December 2026",
    "theme": "Disease Prevention & Treatment",
    "description": "Prepare for health projects, share hygiene knowledge, and close the first half of the year with fellowship.",
    "eventCount": 10
  },
  {
    "key": "2027-01",
    "label": "January 2027",
    "theme": "Vocational Service",
    "description": "Build career confidence, vocational exposure, facilitator capacity, and practical professional skills.",
    "eventCount": 11
  },
  {
    "key": "2027-02",
    "label": "February 2027",
    "theme": "Peacebuilding & Conflict Prevention",
    "description": "Promote peaceful relationships, teamwork, communication, kindness, and youth-led conflict prevention.",
    "eventCount": 10
  },
  {
    "key": "2027-03",
    "label": "March 2027",
    "theme": "Water, Sanitation & Hygiene",
    "description": "Advance water, sanitation, hygiene, dignity, environmental care, and World Rotaract Week engagement.",
    "eventCount": 10
  },
  {
    "key": "2027-04",
    "label": "April 2027",
    "theme": "Maternal & Child Health",
    "description": "Deliver a collaborative medical camp, document impact, and promote maternal, child, and community health.",
    "eventCount": 10
  },
  {
    "key": "2027-05",
    "label": "May 2027",
    "theme": "Youth Service",
    "description": "Mentor young people, support Interact, expand Coding Hour, and celebrate learner creativity.",
    "eventCount": 11
  },
  {
    "key": "2027-06",
    "label": "June 2027",
    "theme": "Rotary Fellowships",
    "description": "Celebrate members and partners, complete reporting, strengthen club connections, and hand over well.",
    "eventCount": 10
  }
];

const clubRhythms = [
  {
    "title": "Board Meeting",
    "timing": "3rd day of every month",
    "purpose": "Decision-making, action tracker, finance, membership and project review.",
    "owner": "President / Board",
    "notes": "Online unless agreed otherwise."
  },
  {
    "title": "DEI Online Fellowship",
    "timing": "First Thursday of every month",
    "purpose": "Build inclusion, belonging and member care.",
    "owner": "DEI / Membership",
    "notes": "Keep it light and discussion-based."
  },
  {
    "title": "Book Club",
    "timing": "Second Thursday of every month",
    "purpose": "Grow a culture of reading, reflection and leadership learning.",
    "owner": "Club Service / Professional Development",
    "notes": "Can use short excerpts so members do not feel overwhelmed."
  },
  {
    "title": "Kahoot / Online Game Night",
    "timing": "Third Thursday of every month",
    "purpose": "Learn Rotaract, district updates and Kenyan current happenings in a fun way.",
    "owner": "Club Service / PR",
    "notes": "Keep games short and lively."
  },
  {
    "title": "Professional Development",
    "timing": "Last Thursday of every month",
    "purpose": "Practical member growth: leadership, career, communication, project planning, AI, finance.",
    "owner": "Professional Development",
    "notes": "If a strong physical Saturday PD is planned, Thursday can become a teaser/reflection."
  },
  {
    "title": "Saturday Fellowship",
    "timing": "Every Saturday, 5:30 PM",
    "purpose": "Regular club culture, planning, project execution, member bonding and fun.",
    "owner": "Club Service / Board",
    "notes": "Not every Saturday should be heavy; rotate impact, learning and fun."
  },
  {
    "title": "Club Assembly",
    "timing": "Last Friday of every month",
    "purpose": "Transparency, committee updates, decisions, dues, project reporting.",
    "owner": "President / Secretary",
    "notes": "December moved to 18 Dec 2026 to avoid Christmas Day."
  }
];

const categoryLabels = Object.freeze({
  administration: "Club Administration",
  membership: "Membership",
  fellowship: "Fellowship",
  service: "Service",
  learning: "Learning & Development",
  fundraising: "Fundraising"
});

const categoryPills = Object.freeze({
  administration: "pill-royal",
  membership: "pill-purple",
  fellowship: "pill-cranberry",
  service: "pill-green",
  learning: "pill-blue",
  fundraising: "pill-gold"
});

const APP_CONFIG = Object.freeze({
  locale: "en-KE",
  whatsappNumber: "254790635614",
  calendarStartMonth: monthlyThemes[0]?.key || "2026-07",
  maximumCalendarChips: 3,
  sliderInterval: 5500
});

const monthNames = Object.freeze([
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]);

const weekdayNames = Object.freeze(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

const eventIndex = new Map(clubEvents.map(event => [event.id, event]));
const eventsByDate = buildEventIndex("date");
const eventsByMonth = new Map();

clubEvents.forEach(event => {
  const monthKey = event.date.slice(0, 7);
  if (!eventsByMonth.has(monthKey)) eventsByMonth.set(monthKey, []);
  eventsByMonth.get(monthKey).push(event);
});

eventsByMonth.forEach(events => events.sort(compareEvents));
eventsByDate.forEach(events => events.sort(compareEvents));

const eventFilterState = {
  category: "all",
  month: "all",
  search: ""
};

const calendarState = {
  monthKey: APP_CONFIG.calendarStartMonth,
  selectedDate: ""
};

let updateEventProgramme = () => {};
let lastDialogTrigger = null;

/* --------------------------------------------------------------------------
   General helpers
   -------------------------------------------------------------------------- */

function buildEventIndex(property) {
  return clubEvents.reduce((index, event) => {
    const key = event[property];
    if (!index.has(key)) index.set(key, []);
    index.get(key).push(event);
    return index;
  }, new Map());
}

function parseLocalDate(dateKey) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey || "")) return new Date(NaN);
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(dateKey, options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}) {
  const date = parseLocalDate(dateKey);
  if (Number.isNaN(date.getTime())) return dateKey;
  return new Intl.DateTimeFormat(APP_CONFIG.locale, options).format(date);
}

function compareEvents(a, b) {
  const dateDifference = parseLocalDate(a.date) - parseLocalDate(b.date);
  if (dateDifference !== 0) return dateDifference;
  return String(a.time || "").localeCompare(String(b.time || ""));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeSearchText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function debounce(callback, delay = 180) {
  let timerId;
  return (...args) => {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => callback(...args), delay);
  };
}

function getTheme(monthKey) {
  return monthlyThemes.find(month => month.key === monthKey);
}

function getEventsForDate(dateKey) {
  return eventsByDate.get(dateKey) || [];
}

function getEventsForMonth(monthKey) {
  return eventsByMonth.get(monthKey) || [];
}

function getTodayAtMidnight() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function isReducedMotionPreferred() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function smoothScrollTo(element) {
  element?.scrollIntoView({
    behavior: isReducedMotionPreferred() ? "auto" : "smooth",
    block: "start"
  });
}

function setQueryParameter(name, value) {
  const url = new URL(window.location.href);
  if (!value || value === "all") url.searchParams.delete(name);
  else url.searchParams.set(name, value);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

/* --------------------------------------------------------------------------
   Navigation
   -------------------------------------------------------------------------- */

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const currentPage = document.body.dataset.page;

  document.querySelectorAll("[data-nav]").forEach(link => {
    const active = link.dataset.nav === currentPage;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  if (!toggle || !nav) return;

  const closeNavigation = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("nav-open");
  };

  const openNavigation = () => {
    toggle.setAttribute("aria-expanded", "true");
    nav.classList.add("open");
    document.body.classList.add("nav-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) closeNavigation();
    else openNavigation();
  });

  nav.addEventListener("click", event => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("click", event => {
    if (!nav.classList.contains("open")) return;
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeNavigation();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeNavigation();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeNavigation();
  });
}

/* --------------------------------------------------------------------------
   Image sliders
   -------------------------------------------------------------------------- */

function initSliders() {
  document.querySelectorAll("[data-slider]").forEach(slider => {
    const slides = [...slider.querySelectorAll(".slide")];
    if (slides.length < 1) return;

    const dotsContainer = slider.querySelector(".slider-dots");
    const nextButton = slider.querySelector("[data-next]");
    const previousButton = slider.querySelector("[data-prev]");
    let activeIndex = 0;
    let timerId = null;

    if (dotsContainer) dotsContainer.innerHTML = "";

    const dots = slides.map((slide, index) => {
      slide.setAttribute("aria-hidden", String(index !== 0));
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider-dot";
      dot.setAttribute("aria-label", `Show image ${index + 1} of ${slides.length}`);
      dot.addEventListener("click", () => showSlide(index));
      dotsContainer?.appendChild(dot);
      return dot;
    });

    function stopAutoplay() {
      window.clearInterval(timerId);
      timerId = null;
    }

    function startAutoplay() {
      stopAutoplay();
      const canAutoplay = slider.dataset.autoplay === "true" && !isReducedMotionPreferred();
      if (canAutoplay && slides.length > 1 && !document.hidden) {
        timerId = window.setInterval(() => showSlide(activeIndex + 1, false), APP_CONFIG.sliderInterval);
      }
    }

    function showSlide(index, restart = true) {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === activeIndex;
        slide.classList.toggle("active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === activeIndex;
        dot.classList.toggle("active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
      if (restart) startAutoplay();
    }

    nextButton?.addEventListener("click", () => showSlide(activeIndex + 1));
    previousButton?.addEventListener("click", () => showSlide(activeIndex - 1));

    slider.addEventListener("keydown", event => {
      if (event.key === "ArrowRight") showSlide(activeIndex + 1);
      if (event.key === "ArrowLeft") showSlide(activeIndex - 1);
    });

    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);
    slider.addEventListener("focusin", stopAutoplay);
    slider.addEventListener("focusout", startAutoplay);
    document.addEventListener("visibilitychange", startAutoplay);

    showSlide(0);
  });
}

/* --------------------------------------------------------------------------
   Reveal-on-scroll animation
   -------------------------------------------------------------------------- */

function initReveal() {
  const items = [...document.querySelectorAll(".reveal:not(.in-view)")];
  if (!items.length) return;

  if (!("IntersectionObserver" in window) || isReducedMotionPreferred()) {
    items.forEach(item => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.08
  });

  items.forEach(item => observer.observe(item));
}

/* --------------------------------------------------------------------------
   Homepage next-event panel
   -------------------------------------------------------------------------- */

function renderNextEvent() {
  const container = document.querySelector("[data-next-event]");
  if (!container || !clubEvents.length) return;

  const today = getTodayAtMidnight();
  const sortedEvents = [...clubEvents].sort(compareEvents);
  const event = sortedEvents.find(item => parseLocalDate(item.date) >= today) || sortedEvents.at(-1);
  if (!event) return;

  container.innerHTML = `
    <span class="pill pill-gold">Next planned activity</span>
    <p class="next-event-date">${escapeHtml(formatDate(event.date))}</p>
    <h3>${escapeHtml(event.title)}</h3>
    <p>${escapeHtml(event.time)} • ${escapeHtml(event.location)}</p>
    <a class="text-link" href="events.html?month=${event.date.slice(0, 7)}#${event.id}">View full details →</a>
  `;
}

/* --------------------------------------------------------------------------
   Annual programme list and filters
   -------------------------------------------------------------------------- */

function getInitialEventMonth() {
  const requestedMonth = new URLSearchParams(window.location.search).get("month");
  if (monthlyThemes.some(month => month.key === requestedMonth)) return requestedMonth;
  return "all";
}

function createEventCard(event) {
  const date = parseLocalDate(event.date);
  const categoryLabel = categoryLabels[event.category] || "Activity";
  const categoryPill = categoryPills[event.category] || "pill-royal";

  return `
    <article class="event-card reveal" id="${escapeHtml(event.id)}"
      data-event-category="${escapeHtml(event.category)}"
      data-event-month="${event.date.slice(0, 7)}">
      <div class="event-date-block" aria-label="${escapeHtml(formatDate(event.date))}">
        <span>${monthNames[date.getMonth()].slice(0, 3)}</span>
        <strong>${date.getDate()}</strong>
        <span>${date.getFullYear()}</span>
      </div>

      <div class="event-card-content">
        <div class="event-card-meta">
          <span>${escapeHtml(event.status)}</span>
          <span>${escapeHtml(event.time)}</span>
          <span>${escapeHtml(event.location)}</span>
        </div>
        <h3>${escapeHtml(event.title)}</h3>
        <p>${escapeHtml(event.description)}</p>
        <div class="event-detail-grid">
          <span><strong>Focus:</strong> ${escapeHtml(event.focus)}</span>
          <span><strong>Lead:</strong> ${escapeHtml(event.lead)}</span>
        </div>
        <details class="event-more">
          <summary>View annual-plan details</summary>
          <div>
            <p><strong>Monthly theme:</strong> ${escapeHtml(event.theme)}</p>
            <p><strong>Format or remarks:</strong> ${escapeHtml(event.format)}</p>
          </div>
        </details>
      </div>

      <span class="pill event-category ${categoryPill}">${escapeHtml(categoryLabel)}</span>
    </article>
  `;
}

function syncEventControls() {
  const monthSelect = document.querySelector("[data-event-month]");
  const searchInput = document.querySelector("[data-event-search]");

  if (monthSelect) monthSelect.value = eventFilterState.month;
  if (searchInput && searchInput.value !== eventFilterState.search) searchInput.value = eventFilterState.search;

  document.querySelectorAll("[data-event-filter]").forEach(button => {
    const active = button.dataset.eventFilter === eventFilterState.category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function resetEventFilters() {
  eventFilterState.category = "all";
  eventFilterState.month = "all";
  eventFilterState.search = "";
  syncEventControls();
  setQueryParameter("month", "all");
  updateEventProgramme();
}

function renderEventProgramme() {
  const list = document.querySelector("[data-event-list]");
  if (!list) return;

  const monthSelect = document.querySelector("[data-event-month]");
  const searchInput = document.querySelector("[data-event-search]");
  const resultCount = document.querySelector("[data-event-results]");
  const clearButton = document.querySelector("[data-clear-event-filters]");
  const filterButtons = [...document.querySelectorAll("[data-event-filter]")];

  if (monthSelect) {
    monthSelect.innerHTML = [
      '<option value="all">All months</option>',
      ...monthlyThemes.map(month => (
        `<option value="${month.key}">${escapeHtml(month.label)} — ${escapeHtml(month.theme)}</option>`
      ))
    ].join("");
  }

  eventFilterState.month = getInitialEventMonth();

  updateEventProgramme = () => {
    const query = normalizeSearchText(eventFilterState.search);
    const filteredEvents = [...clubEvents]
      .sort(compareEvents)
      .filter(event => eventFilterState.category === "all" || event.category === eventFilterState.category)
      .filter(event => eventFilterState.month === "all" || event.date.startsWith(eventFilterState.month))
      .filter(event => {
        if (!query) return true;
        const searchableText = normalizeSearchText([
          event.title,
          event.description,
          event.focus,
          event.lead,
          event.theme,
          event.location,
          event.status,
          event.format
        ].join(" "));
        return searchableText.includes(query);
      });

    if (resultCount) {
      const noun = filteredEvents.length === 1 ? "activity" : "activities";
      resultCount.textContent = `${filteredEvents.length} ${noun} shown`;
    }

    if (!filteredEvents.length) {
      list.innerHTML = `
        <div class="event-empty-state">
          <strong>No activities match those filters.</strong>
          <p>Try another month, category, or search phrase.</p>
          <button class="btn btn-outline" type="button" data-empty-reset>Clear filters</button>
        </div>
      `;
      list.querySelector("[data-empty-reset]")?.addEventListener("click", resetEventFilters);
      return;
    }

    const groupedEvents = filteredEvents.reduce((groups, event) => {
      const monthKey = event.date.slice(0, 7);
      if (!groups.has(monthKey)) groups.set(monthKey, []);
      groups.get(monthKey).push(event);
      return groups;
    }, new Map());

    list.innerHTML = [...groupedEvents.entries()].map(([monthKey, events]) => {
      const month = getTheme(monthKey);
      return `
        <section class="event-month-group" aria-labelledby="month-${monthKey}">
          <header class="event-month-heading">
            <div>
              <span>${escapeHtml(month?.label || monthKey)}</span>
              <h3 id="month-${monthKey}">${escapeHtml(month?.theme || "Club Activities")}</h3>
            </div>
            <strong>${events.length} ${events.length === 1 ? "activity" : "activities"}</strong>
          </header>
          <div class="event-month-cards">
            ${events.map(createEventCard).join("")}
          </div>
        </section>
      `;
    }).join("");

    initReveal();

    const requestedEventId = window.location.hash.slice(1);
    if (requestedEventId) {
      const requestedCard = document.getElementById(requestedEventId);
      if (requestedCard) window.requestAnimationFrame(() => smoothScrollTo(requestedCard));
    }
  };

  const handleSearch = debounce(() => {
    eventFilterState.search = searchInput?.value || "";
    updateEventProgramme();
  });

  searchInput?.addEventListener("input", handleSearch);

  monthSelect?.addEventListener("change", () => {
    eventFilterState.month = monthSelect.value;
    setQueryParameter("month", eventFilterState.month);
    updateEventProgramme();
  });

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      eventFilterState.category = button.dataset.eventFilter || "all";
      syncEventControls();
      updateEventProgramme();
    });
  });

  clearButton?.addEventListener("click", resetEventFilters);

  syncEventControls();
  updateEventProgramme();
}

/* --------------------------------------------------------------------------
   Interactive monthly calendar
   -------------------------------------------------------------------------- */

function getInitialCalendarMonth() {
  const queryMonth = new URLSearchParams(window.location.search).get("month");
  if (monthlyThemes.some(month => month.key === queryMonth)) return queryMonth;

  const today = new Date();
  const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
  if (monthlyThemes.some(month => month.key === currentMonth)) return currentMonth;

  return APP_CONFIG.calendarStartMonth;
}

function getPreferredDateForMonth(monthKey) {
  const monthEvents = getEventsForMonth(monthKey);
  const todayKey = toDateKey(new Date());
  if (todayKey.startsWith(monthKey)) return todayKey;
  return monthEvents[0]?.date || `${monthKey}-01`;
}

function setCalendarMonth(monthKey, preferredDate = "") {
  if (!monthlyThemes.some(month => month.key === monthKey)) return;
  calendarState.monthKey = monthKey;
  calendarState.selectedDate = preferredDate.startsWith(monthKey)
    ? preferredDate
    : getPreferredDateForMonth(monthKey);

  renderFullCalendar();
  renderCalendarAgenda(calendarState.selectedDate);
}

function createCalendarEventChip(event) {
  return `
    <button class="calendar-event-chip calendar-chip-${escapeHtml(event.category)}" type="button"
      data-calendar-event-id="${escapeHtml(event.id)}"
      title="${escapeHtml(event.title)}"
      aria-label="Open ${escapeHtml(event.title)} details">
      <span>${escapeHtml(event.time)}</span>
      ${escapeHtml(event.title)}
    </button>
  `;
}

function renderFullCalendar() {
  const calendar = document.querySelector("[data-full-calendar]");
  const title = document.querySelector("[data-full-calendar-title]");
  const select = document.querySelector("[data-full-calendar-select]");
  const previousButton = document.querySelector("[data-full-calendar-prev]");
  const nextButton = document.querySelector("[data-full-calendar-next]");
  if (!calendar) return;

  const [year, monthNumber] = calendarState.monthKey.split("-").map(Number);
  const monthIndex = monthNumber - 1;
  const monthPosition = monthlyThemes.findIndex(month => month.key === calendarState.monthKey);
  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const daysInPreviousMonth = new Date(year, monthIndex, 0).getDate();
  const todayKey = toDateKey(new Date());

  if (title) title.textContent = `${monthNames[monthIndex]} ${year}`;
  if (select) select.value = calendarState.monthKey;
  if (previousButton) previousButton.disabled = monthPosition <= 0;
  if (nextButton) nextButton.disabled = monthPosition >= monthlyThemes.length - 1;

  const cells = [];

  for (let index = 0; index < 42; index += 1) {
    const relativeDay = index - firstWeekday + 1;
    let cellYear = year;
    let cellMonth = monthIndex;
    let day = relativeDay;
    let outsideMonth = false;

    if (relativeDay < 1) {
      outsideMonth = true;
      day = daysInPreviousMonth + relativeDay;
      cellMonth -= 1;
      if (cellMonth < 0) {
        cellMonth = 11;
        cellYear -= 1;
      }
    } else if (relativeDay > daysInMonth) {
      outsideMonth = true;
      day = relativeDay - daysInMonth;
      cellMonth += 1;
      if (cellMonth > 11) {
        cellMonth = 0;
        cellYear += 1;
      }
    }

    const dateKey = `${cellYear}-${String(cellMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dateEvents = getEventsForDate(dateKey);
    const visibleEvents = dateEvents.slice(0, APP_CONFIG.maximumCalendarChips);
    const isSelected = dateKey === calendarState.selectedDate;
    const isToday = dateKey === todayKey;

    const eventButtons = visibleEvents.map(createCalendarEventChip).join("");
    const hiddenCount = dateEvents.length - visibleEvents.length;

    cells.push(`
      <div class="full-calendar-day${outsideMonth ? " outside-month" : ""}${isSelected ? " selected" : ""}${isToday ? " today" : ""}${dateEvents.length ? " has-activities" : ""}"
        data-calendar-cell="${dateKey}">
        <button class="calendar-date-button" type="button"
          data-calendar-date="${dateKey}"
          aria-label="View activities for ${escapeHtml(formatDate(dateKey))}"
          ${isSelected ? 'aria-current="date"' : ""}>
          ${day}
        </button>
        <div class="calendar-event-stack">${eventButtons}</div>
        ${hiddenCount > 0 ? `
          <button class="calendar-more-events" type="button" data-calendar-date="${dateKey}">
            +${hiddenCount} more
          </button>
        ` : ""}
      </div>
    `);
  }

  calendar.innerHTML = `
    <div class="full-calendar-weekdays" aria-hidden="true">
      ${weekdayNames.map(day => `<span>${day}</span>`).join("")}
    </div>
    <div class="full-calendar-grid">${cells.join("")}</div>
  `;

  calendar.querySelectorAll("[data-calendar-date]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      const dateKey = button.dataset.calendarDate;
      calendarState.selectedDate = dateKey;
      renderFullCalendar();
      renderCalendarAgenda(dateKey);
    });
  });

  calendar.querySelectorAll("[data-calendar-event-id]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      openEventDialog(button.dataset.calendarEventId, button);
    });
  });
}

function renderCalendarAgenda(dateKey) {
  const title = document.querySelector("[data-calendar-agenda-title]");
  const list = document.querySelector("[data-calendar-agenda-list]");
  if (!title || !list) return;

  const events = getEventsForDate(dateKey);
  title.textContent = formatDate(dateKey);

  if (!events.length) {
    list.innerHTML = `
      <div class="calendar-empty">
        <strong>No activity scheduled.</strong>
        <p>This date is currently open in the annual plan.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = events.map(event => `
    <article class="agenda-event">
      <span class="agenda-category calendar-chip-${escapeHtml(event.category)}">
        ${escapeHtml(categoryLabels[event.category] || "Activity")}
      </span>
      <div>
        <span>${escapeHtml(event.time)} • ${escapeHtml(event.location)}</span>
        <h4>${escapeHtml(event.title)}</h4>
        <p>${escapeHtml(event.description)}</p>
      </div>
      <button class="agenda-details" type="button" data-calendar-event-id="${escapeHtml(event.id)}">
        Details →
      </button>
    </article>
  `).join("");

  list.querySelectorAll("[data-calendar-event-id]").forEach(button => {
    button.addEventListener("click", () => openEventDialog(button.dataset.calendarEventId, button));
  });
}

function createEventDialogMarkup(event) {
  const categoryLabel = categoryLabels[event.category] || "Activity";
  const contactReason = encodeURIComponent(`event-${event.title}`);

  return `
    <span class="pill ${categoryPills[event.category] || "pill-royal"}">${escapeHtml(categoryLabel)}</span>
    <p class="dialog-date">${escapeHtml(formatDate(event.date))}</p>
    <h2 id="event-dialog-title">${escapeHtml(event.title)}</h2>
    <p>${escapeHtml(event.description)}</p>

    <div class="dialog-detail-grid">
      <p><strong>Time</strong><span>${escapeHtml(event.time)}</span></p>
      <p><strong>Venue</strong><span>${escapeHtml(event.location)}</span></p>
      <p><strong>Lead team</strong><span>${escapeHtml(event.lead)}</span></p>
      <p><strong>Status</strong><span>${escapeHtml(event.status)}</span></p>
      <p><strong>Monthly theme</strong><span>${escapeHtml(event.theme)}</span></p>
      <p><strong>Programme focus</strong><span>${escapeHtml(event.focus)}</span></p>
    </div>

    <p class="dialog-note"><strong>Format or remarks</strong>${escapeHtml(event.format)}</p>

    <div class="dialog-actions">
      <a class="btn btn-primary" href="contact.html?reason=${contactReason}">Ask About This Activity</a>
      <button class="btn btn-outline" type="button" data-dialog-view-month>View Month Programme</button>
    </div>
  `;
}

function openEventDialog(eventId, trigger = null) {
  const event = eventIndex.get(eventId);
  const dialog = document.querySelector("[data-event-dialog]");
  const content = dialog?.querySelector("[data-event-dialog-content]");
  if (!event || !dialog || !content) return;

  lastDialogTrigger = trigger || document.activeElement;
  content.innerHTML = createEventDialogMarkup(event);

  content.querySelector("[data-dialog-view-month]")?.addEventListener("click", () => {
    closeEventDialog();
    eventFilterState.category = "all";
    eventFilterState.month = event.date.slice(0, 7);
    eventFilterState.search = "";
    syncEventControls();
    setQueryParameter("month", eventFilterState.month);
    updateEventProgramme();
    smoothScrollTo(document.querySelector("[data-event-programme]"));
  });

  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function closeEventDialog() {
  const dialog = document.querySelector("[data-event-dialog]");
  if (!dialog) return;
  if (typeof dialog.close === "function" && dialog.open) dialog.close();
  else dialog.removeAttribute("open");
  lastDialogTrigger?.focus?.();
  lastDialogTrigger = null;
}

function initFullCalendar() {
  const calendar = document.querySelector("[data-full-calendar]");
  if (!calendar) return;

  const select = document.querySelector("[data-full-calendar-select]");
  const previousButton = document.querySelector("[data-full-calendar-prev]");
  const nextButton = document.querySelector("[data-full-calendar-next]");
  const dialog = document.querySelector("[data-event-dialog]");
  const closeButton = document.querySelector("[data-event-dialog-close]");

  if (select) {
    select.innerHTML = monthlyThemes.map(month => (
      `<option value="${month.key}">${escapeHtml(month.label)} — ${escapeHtml(month.theme)}</option>`
    )).join("");
  }

  calendarState.monthKey = getInitialCalendarMonth();
  calendarState.selectedDate = getPreferredDateForMonth(calendarState.monthKey);

  previousButton?.addEventListener("click", () => {
    const index = monthlyThemes.findIndex(month => month.key === calendarState.monthKey);
    if (index > 0) setCalendarMonth(monthlyThemes[index - 1].key);
  });

  nextButton?.addEventListener("click", () => {
    const index = monthlyThemes.findIndex(month => month.key === calendarState.monthKey);
    if (index < monthlyThemes.length - 1) setCalendarMonth(monthlyThemes[index + 1].key);
  });

  select?.addEventListener("change", () => setCalendarMonth(select.value));
  closeButton?.addEventListener("click", closeEventDialog);

  dialog?.addEventListener("click", event => {
    if (event.target === dialog) closeEventDialog();
  });

  dialog?.addEventListener("close", () => {
    lastDialogTrigger?.focus?.();
    lastDialogTrigger = null;
  });

  setCalendarMonth(calendarState.monthKey, calendarState.selectedDate);
}

function showCalendarDate(dateKey) {
  if (!getEventsForDate(dateKey).length) return;
  setCalendarMonth(dateKey.slice(0, 7), dateKey);
  smoothScrollTo(document.querySelector("#interactive-calendar"));
}

/* --------------------------------------------------------------------------
   Compact annual calendar
   -------------------------------------------------------------------------- */

function renderAnnualCalendar() {
  const container = document.querySelector("[data-annual-calendar]");
  if (!container) return;

  const startYear = Number(container.dataset.startYear || new Date().getFullYear());
  const startMonth = Number(container.dataset.startMonth || 0);
  const months = [];

  for (let offset = 0; offset < 12; offset += 1) {
    const firstDate = new Date(startYear, startMonth + offset, 1);
    const year = firstDate.getFullYear();
    const monthIndex = firstDate.getMonth();
    const firstWeekday = firstDate.getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const dayCells = [];

    for (let blank = 0; blank < firstWeekday; blank += 1) {
      dayCells.push('<span class="calendar-day muted" aria-hidden="true"></span>');
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const dateKey = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const dateEvents = getEventsForDate(dateKey);

      if (!dateEvents.length) {
        dayCells.push(`<span class="calendar-day">${day}</span>`);
        continue;
      }

      const categories = [...new Set(dateEvents.map(event => event.category))];
      const eventClass = categories.length > 1 || dateEvents.length > 1
        ? "event-multiple"
        : `event-${categories[0]}`;
      const titles = dateEvents.map(event => event.title).join(" • ");

      dayCells.push(`
        <button class="calendar-day has-event ${eventClass}" type="button"
          data-calendar-date="${dateKey}"
          title="${escapeHtml(titles)}"
          aria-label="${escapeHtml(formatDate(dateKey))}: ${escapeHtml(titles)}">
          <span>${day}</span>
          ${dateEvents.length > 1 ? `<small>${dateEvents.length}</small>` : ""}
        </button>
      `);
    }

    months.push(`
      <article class="calendar-month reveal">
        <h3>${monthNames[monthIndex]} ${year}</h3>
        <div class="calendar-weekdays" aria-hidden="true">
          ${weekdayNames.map(day => `<span>${day.slice(0, 1)}</span>`).join("")}
        </div>
        <div class="calendar-days">${dayCells.join("")}</div>
      </article>
    `);
  }

  container.innerHTML = months.join("");
  container.querySelectorAll("[data-calendar-date]").forEach(button => {
    button.addEventListener("click", () => showCalendarDate(button.dataset.calendarDate));
  });

  initReveal();
}

/* --------------------------------------------------------------------------
   Monthly themes, statistics, and club rhythm
   -------------------------------------------------------------------------- */

function renderMonthlyThemes() {
  const container = document.querySelector("[data-monthly-themes]");
  if (!container) return;

  container.innerHTML = monthlyThemes.map(month => {
    const actualCount = getEventsForMonth(month.key).length;
    return `
      <button class="theme-card reveal" type="button" data-theme-month="${month.key}">
        <span>${escapeHtml(month.label)}</span>
        <h3>${escapeHtml(month.theme)}</h3>
        <p>${escapeHtml(month.description)}</p>
        <strong>${actualCount} planned ${actualCount === 1 ? "activity" : "activities"} →</strong>
      </button>
    `;
  }).join("");

  container.querySelectorAll("[data-theme-month]").forEach(button => {
    button.addEventListener("click", () => {
      eventFilterState.category = "all";
      eventFilterState.month = button.dataset.themeMonth;
      eventFilterState.search = "";
      syncEventControls();
      setQueryParameter("month", eventFilterState.month);
      updateEventProgramme();
      smoothScrollTo(document.querySelector("[data-event-programme]"));
    });
  });

  initReveal();
}

function renderEventStats() {
  const values = {
    activities: clubEvents.length,
    themes: monthlyThemes.length,
    service: clubEvents.filter(event => event.category === "service").length,
    rhythms: clubRhythms.length
  };

  document.querySelectorAll("[data-event-stat]").forEach(element => {
    element.textContent = String(values[element.dataset.eventStat] ?? 0);
  });
}

function renderClubRhythms() {
  const container = document.querySelector("[data-club-rhythms]");
  if (!container) return;

  container.innerHTML = clubRhythms.map((rhythm, index) => `
    <article class="rhythm-card reveal">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(rhythm.title)}</h3>
      <strong>${escapeHtml(rhythm.timing)}</strong>
      <p>${escapeHtml(rhythm.purpose)}</p>
      <small><b>Lead:</b> ${escapeHtml(rhythm.owner)}</small>
    </article>
  `).join("");

  initReveal();
}

/* --------------------------------------------------------------------------
   Gallery lightbox
   -------------------------------------------------------------------------- */

function initGallery() {
  const items = [...document.querySelectorAll(".gallery-item")];
  if (!items.length) return;

  const filterButtons = [...document.querySelectorAll("[data-gallery-filter]")];
  const modal = document.querySelector("[data-lightbox-modal]");
  const modalImage = modal?.querySelector("img");
  const modalCaption = modal?.querySelector("p");
  const closeButton = modal?.querySelector(".lightbox-close");
  let lastFocusedItem = null;

  filterButtons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
    button.addEventListener("click", () => {
      const filter = button.dataset.galleryFilter || "all";
      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      items.forEach(item => {
        const hidden = filter !== "all" && item.dataset.category !== filter;
        item.classList.toggle("hidden", hidden);
        item.setAttribute("aria-hidden", String(hidden));
      });
    });
  });

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
    lastFocusedItem?.focus?.();
  }

  function openLightbox(item) {
    if (!modal || !modalImage || !modalCaption) return;
    lastFocusedItem = item;
    modalImage.src = item.dataset.lightbox || item.querySelector("img")?.src || "";
    modalImage.alt = item.querySelector("img")?.alt || "Rotaract Club of Kitale gallery image";
    modalCaption.textContent = item.dataset.caption || "";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");
    closeButton?.focus();
  }

  items.forEach(item => {
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.addEventListener("click", () => openLightbox(item));
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(item);
      }
    });
  });

  closeButton?.addEventListener("click", closeLightbox);
  modal?.addEventListener("click", event => {
    if (event.target === modal) closeLightbox();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal?.classList.contains("open")) closeLightbox();
  });
}

/* --------------------------------------------------------------------------
   Contact form: submit through WhatsApp
   -------------------------------------------------------------------------- */

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const queryReason = new URLSearchParams(window.location.search).get("reason");
  if (queryReason && form.elements.reason) {
    const matchingOption = [...form.elements.reason.options].find(option => option.value === queryReason);
    if (matchingOption) form.elements.reason.value = queryReason;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const message = [
      "Hello Rotaract Club of Kitale,",
      "",
      `My name is ${data.get("name")}.`,
      `Reason: ${data.get("reason")}.`,
      data.get("phone") ? `Phone: ${data.get("phone")}` : "",
      data.get("email") ? `Email: ${data.get("email")}` : "",
      "",
      String(data.get("message") || "")
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

/* --------------------------------------------------------------------------
   Utility actions
   -------------------------------------------------------------------------- */

function initUtilityActions() {
  document.querySelectorAll("[data-current-year]").forEach(element => {
    element.textContent = String(new Date().getFullYear());
  });

  document.querySelector("[data-print-calendar]")?.addEventListener("click", () => window.print());

  const backToTop = document.querySelector(".back-to-top");
  if (!backToTop) return;

  const updateVisibility = () => {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  };

  window.addEventListener("scroll", updateVisibility, { passive: true });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: isReducedMotionPreferred() ? "auto" : "smooth" });
  });
  updateVisibility();
}

/* --------------------------------------------------------------------------
   Application bootstrap
   -------------------------------------------------------------------------- */

function initialiseWebsite() {
  initNavigation();
  initSliders();
  renderNextEvent();
  renderEventStats();
  renderEventProgramme();
  initFullCalendar();
  renderAnnualCalendar();
  renderMonthlyThemes();
  renderClubRhythms();
  initGallery();
  initContactForm();
  initUtilityActions();
  initReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiseWebsite, { once: true });
} else {
  initialiseWebsite();
}
