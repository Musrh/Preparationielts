/* Préparez votre IELTS — contenu et affichage des pages légales (FR / EN / AR).
   Pages : privacy.html, terms.html, legal-notice.html, cookies.html, contact.html
   Pour modifier un texte (ex. l'e-mail de contact), il suffit de le changer ici, une seule fois. */
(function () {
  'use strict';

  var PAGES = {
    "fr": {
        "privacy": {
            "kicker": "CONFIDENTIALITE",
            "title": "Politique de confidentialite",
            "lead": "Cette page explique de maniere generale quelles donnees le service Préparez votre IELTS peut traiter et dans quel but.",
            "blocks": [
                [
                    "1. Donnees de compte",
                    "Un compte n est necessaire que pour le module Speaking. Lors de la creation d un compte, le service traite notamment l adresse e-mail et les informations necessaires a l authentification. Le module Listening est accessible sans compte."
                ],
                [
                    "2. Sessions Speaking et scores",
                    "Pour appliquer la limite quotidienne, le service enregistre le nombre de sessions Speaking effectuees chaque jour avec votre compte. Le score du test Speaking, les corrections et les reponses proposees vous sont affiches a la fin de la session, et vos reponses ne sont pas enregistrees. Le score du test Listening est calcule dans votre navigateur et n est pas enregistre."
                ],
                [
                    "3. Firebase",
                    "L authentification et certaines donnees du compte sont gerees avec Firebase Authentication et Firestore. Les donnees sont associees au compte Firebase de l utilisateur."
                ],
                [
                    "4. Videos YouTube",
                    "Les videos sont diffusees depuis YouTube. Lorsque vous utilisez le lecteur YouTube integre, YouTube peut traiter certaines informations selon ses propres conditions et politiques."
                ],
                [
                    "5. Reconnaissance vocale et intelligence artificielle",
                    "Pendant une session Speaking, votre voix est transformee en texte par le service de reconnaissance vocale de votre navigateur, selon la politique de l editeur de ce navigateur. Le service ne recoit jamais d audio : seul le texte de vos reponses est envoye, puis transmis a un service d intelligence artificielle afin de produire le score, les corrections et les conseils."
                ],
                [
                    "6. Finalites",
                    "Les donnees sont utilisees pour permettre la connexion, appliquer la limite quotidienne de sessions Speaking, faire fonctionner le service, ameliorer le service et repondre aux demandes d assistance."
                ],
                [
                    "7. Conservation",
                    "Les donnees sont conservees pendant la periode necessaire au fonctionnement du compte et aux finalites indiquees, sous reserve des obligations legales applicables."
                ],
                [
                    "8. Vos demandes",
                    "Pour demander l acces, la correction ou la suppression de donnees associees a votre compte, contactez l editeur a l adresse indiquee sur la page Contact."
                ],
                [
                    "9. Securite",
                    "Des mesures techniques et organisationnelles sont mises en place pour proteger les donnees. Aucun systeme en ligne ne peut toutefois garantir une securite absolue."
                ],
                [
                    "10. Mise a jour",
                    "Cette politique peut etre mise a jour lorsque le fonctionnement du service evolue. La date de derniere mise a jour doit etre indiquee lors de la publication."
                ]
            ]
        },
        "terms": {
            "kicker": "CONDITIONS",
            "title": "Conditions d utilisation",
            "lead": "Les presentes conditions encadrent l utilisation de Préparez votre IELTS.",
            "blocks": [
                [
                    "1. Utilisation du service",
                    "Préparez votre IELTS permet de s entrainer a l examen IELTS : tests Listening bases sur des videos YouTube, avec un score, et sessions de Speaking avec un examinateur IA, avec un score, des corrections et des reponses proposees."
                ],
                [
                    "2. Compte",
                    "Un compte est necessaire pour utiliser le module Speaking ; le module Listening est accessible sans compte. L utilisateur est responsable de l exactitude des informations fournies lors de la creation du compte et de la confidentialite de ses identifiants."
                ],
                [
                    "3. Sessions Speaking",
                    "Le nombre de sessions Speaking par jour et par compte est limite. L editeur peut modifier cette limite ou suspendre le module a tout moment."
                ],
                [
                    "4. Contenu YouTube",
                    "Les videos sont fournies par YouTube. L utilisateur doit respecter les conditions applicables a l utilisation du lecteur et du contenu YouTube."
                ],
                [
                    "5. Scores et contenu genere par IA",
                    "Le score, les corrections et les reponses proposees du module Speaking sont generes par intelligence artificielle ; le score du module Listening est calcule automatiquement a partir des reponses enregistrees pour chaque test. Ces resultats sont fournis a des fins d entrainement et d apprentissage, sont indicatifs, ne constituent pas une garantie d exactitude et ne garantissent aucun resultat a l examen IELTS."
                ],
                [
                    "6. Utilisations interdites",
                    "Il est interdit d utiliser le service pour tenter d acceder aux comptes d autrui, contourner les mesures de securite, perturber le service ou utiliser le site d une maniere contraire aux lois applicables."
                ],
                [
                    "7. Disponibilite",
                    "Le service Préparez votre IELTS peut etre modifie, suspendu ou interrompu temporairement pour maintenance, securite ou evolution technique."
                ],
                [
                    "8. Compte et donnees",
                    "L utilisateur peut demander la suppression de son compte et des donnees associees en utilisant les coordonnees de contact publiees."
                ],
                [
                    "9. Modifications",
                    "Les conditions peuvent etre mises a jour lorsque le service evolue. La version publiee sur le site constitue la version applicable a compter de sa date d entree en vigueur."
                ]
            ]
        },
        "legal": {
            "kicker": "MENTIONS LEGALES",
            "title": "Mentions legales",
            "lead": "Les informations ci-dessous doivent etre completees avec les informations legales reelles de l editeur avant la mise en production.",
            "blocks": [
                [
                    "Editeur du site",
                    "Nom / raison sociale : Mustapha RHALLAB<br>E-mail : <bdi dir=\"ltr\"><a href=\"mailto:myshopts@gmail.com\">myshopts@gmail.com</a></bdi><br><bdi dir=\"ltr\"><a href=\"mailto:musplay2023@gmail.com\">musplay2023@gmail.com</a></bdi>"
                ],
                [
                    "Responsable de publication",
                    "Nom : Mustapha RHALLAB"
                ],
                [
                    "Hebergement",
                    "Interface web : GitHub Pages.<br>API : Railway.<br>Authentification et donnees du compte : Firebase / Google Cloud."
                ],
                [
                    "Videos",
                    "Les videos sont diffusees depuis YouTube au moyen de son lecteur integre. Préparez votre IELTS ne revendique pas la propriete des videos diffusees par des tiers."
                ]
            ]
        },
        "cookies": {
            "kicker": "COOKIES",
            "title": "Cookies et technologies similaires",
            "lead": "Préparez votre IELTS peut utiliser des cookies, le stockage local du navigateur et des technologies de session pour faire fonctionner le service.",
            "blocks": [
                [
                    "Stockage local",
                    "Le site peut utiliser le stockage local du navigateur pour conserver certaines preferences d interface, par exemple la langue choisie."
                ],
                [
                    "Authentification",
                    "Firebase Authentication peut utiliser des mecanismes necessaires au maintien de la session de connexion."
                ],
                [
                    "Lecteur YouTube",
                    "Le lecteur YouTube integre peut utiliser des cookies ou technologies similaires selon le fonctionnement et les parametres de YouTube."
                ],
                [
                    "Gestion des preferences",
                    "Les preferences du navigateur peuvent permettre de limiter ou supprimer certains cookies. La desactivation de mecanismes necessaires peut toutefois affecter certaines fonctions du site."
                ],
                [
                    "Mise a jour",
                    "Cette page doit etre ajustee si de nouveaux outils d analyse, de publicite ou de suivi sont ajoutes au service."
                ]
            ]
        },
        "contact": {
            "kicker": "CONTACT",
            "title": "Nous contacter",
            "lead": "Pour une question, un probleme technique ou une demande concernant vos donnees, utilisez les coordonnees officielles du service.",
            "blocks": [
                [
                    "Support",
                    "Adresse e-mail : <span class=\"legal-placeholder\">[EMAIL DE CONTACT A RENSEIGNER]</span>"
                ],
                [
                    "Probleme technique",
                    "Indiquez votre adresse e-mail de compte, le probleme rencontre et, si possible, une capture d ecran. Ne communiquez jamais votre mot de passe."
                ],
                [
                    "Demande relative aux donnees",
                    "Pour demander une information, une correction ou la suppression de donnees associees a votre compte, utilisez l adresse de contact officielle du service."
                ]
            ]
        }
    },
    "en": {
        "privacy": {
            "kicker": "PRIVACY",
            "title": "Privacy Policy",
            "lead": "This page generally explains what data Prepare Your IELTS may process and why.",
            "blocks": [
                [
                    "1. Account data",
                    "An account is only needed for the Speaking module. When you create an account, the service processes information such as your email address and data required for authentication. The Listening module can be used without an account."
                ],
                [
                    "2. Speaking sessions and scores",
                    "To apply the daily limit, the service records how many Speaking sessions are completed each day with your account. The Speaking test score, the corrections and the suggested answers are shown to you at the end of the session, and your answers are not stored. The Listening test score is calculated in your browser and is not stored."
                ],
                [
                    "3. Firebase",
                    "Authentication and some account data are handled with Firebase Authentication and Firestore and associated with your Firebase user account."
                ],
                [
                    "4. YouTube videos",
                    "Videos are streamed from YouTube. When you use the embedded YouTube player, YouTube may process certain information under its own terms and policies."
                ],
                [
                    "5. Speech recognition and artificial intelligence",
                    "During a Speaking session, your voice is converted to text by your browser's speech recognition service, under the policy of the browser's publisher. The service never receives audio: only the text of your answers is sent, and it is then passed to an artificial intelligence service to produce the score, corrections and advice."
                ],
                [
                    "6. Purposes",
                    "Data is used to provide login, apply the daily Speaking session limit, operate the service, improve the service and respond to support requests."
                ],
                [
                    "7. Retention",
                    "Data is retained for as long as needed for the account and stated purposes, subject to applicable legal requirements."
                ],
                [
                    "8. Your requests",
                    "To request access, correction or deletion of account data, contact the publisher using the address on the Contact page."
                ],
                [
                    "9. Security",
                    "Technical and organizational measures are used to protect data. No online system can guarantee absolute security."
                ],
                [
                    "10. Updates",
                    "This policy may be updated when the service changes. A last-updated date should be added when the page is published."
                ]
            ]
        },
        "terms": {
            "kicker": "TERMS",
            "title": "Terms of Use",
            "lead": "These terms govern the use of Prepare Your IELTS.",
            "blocks": [
                [
                    "1. Service use",
                    "Prepare Your IELTS lets users practise for the IELTS exam: Listening tests based on YouTube videos, with a score, and Speaking sessions with an AI examiner, with a score, corrections and suggested answers."
                ],
                [
                    "2. Account",
                    "An account is required to use the Speaking module; the Listening module can be used without an account. Users are responsible for the accuracy of information provided when creating an account and for keeping their credentials confidential."
                ],
                [
                    "3. Speaking sessions",
                    "The number of Speaking sessions per day and per account is limited. The publisher may change this limit or suspend the module at any time."
                ],
                [
                    "4. YouTube content",
                    "Videos are provided by YouTube. Users must comply with the terms applicable to use of the YouTube player and content."
                ],
                [
                    "5. Scores and AI-generated content",
                    "The Speaking score, corrections and suggested answers are generated by artificial intelligence; the Listening score is calculated automatically from the answers stored for each test. These results are provided for practice and learning purposes, are indicative, are not a guarantee of accuracy and do not guarantee any result in the IELTS exam."
                ],
                [
                    "6. Prohibited use",
                    "Users must not attempt to access other users accounts, bypass security measures, disrupt the service or use the site in violation of applicable laws."
                ],
                [
                    "7. Availability",
                    "The Prepare Your IELTS service may be modified, temporarily suspended or interrupted for maintenance, security or technical changes."
                ],
                [
                    "8. Account and data",
                    "Users may request account and associated data deletion using the published contact details."
                ],
                [
                    "9. Changes",
                    "These terms may be updated when the service changes. The version published on the site applies from its effective date."
                ]
            ]
        },
        "legal": {
            "kicker": "LEGAL NOTICE",
            "title": "Legal Notice",
            "lead": "The information below must be completed with the publisher s actual legal details before launch.",
            "blocks": [
                [
                    "Site publisher",
                    "Name / company: Mustapha RHALLAB<br>Email: <bdi dir=\"ltr\"><a href=\"mailto:myshopts@gmail.com\">myshopts@gmail.com</a></bdi><br><bdi dir=\"ltr\"><a href=\"mailto:musplay2023@gmail.com\">musplay2023@gmail.com</a></bdi>"
                ],
                [
                    "Publication manager",
                    "Name: Mustapha RHALLAB"
                ],
                [
                    "Hosting",
                    "Web interface: GitHub Pages.<br>API: Railway.<br>Authentication and account data: Firebase / Google Cloud."
                ],
                [
                    "Videos",
                    "Videos are displayed through the embedded YouTube player. Prepare Your IELTS does not claim ownership of third-party videos."
                ]
            ]
        },
        "cookies": {
            "kicker": "COOKIES",
            "title": "Cookies and Similar Technologies",
            "lead": "Prepare Your IELTS may use cookies, browser local storage and session technologies needed to operate the service.",
            "blocks": [
                [
                    "Local storage",
                    "The site may use browser local storage to keep interface preferences such as the selected language."
                ],
                [
                    "Authentication",
                    "Firebase Authentication may use mechanisms needed to maintain the login session."
                ],
                [
                    "YouTube player",
                    "The embedded YouTube player may use cookies or similar technologies depending on YouTube s operation and settings."
                ],
                [
                    "Managing preferences",
                    "Browser settings may allow you to limit or delete certain cookies. Disabling necessary mechanisms may affect some site features."
                ],
                [
                    "Updates",
                    "This page should be updated if analytics, advertising or additional tracking tools are added."
                ]
            ]
        },
        "contact": {
            "kicker": "CONTACT",
            "title": "Contact us",
            "lead": "For a question, technical issue or request about your data, use the official service contact details.",
            "blocks": [
                [
                    "Support",
                    "Email address: <span class=\"legal-placeholder\">[CONTACT EMAIL TO BE ADDED]</span>"
                ],
                [
                    "Technical issue",
                    "Include your account email, the problem you encountered and, if possible, a screenshot. Never share your password."
                ],
                [
                    "Data request",
                    "To request information, correction or deletion of data associated with your account, use the official contact address."
                ]
            ]
        }
    },
    "ar": {
        "privacy": {
            "kicker": "الخصوصية",
            "title": "سياسة الخصوصية",
            "lead": "توضح هذه الصفحة بشكل عام البيانات التي قد يعالجها حضّر لاختبار IELTS والغرض من استخدامها.",
            "blocks": [
                [
                    "1. بيانات الحساب",
                    "الحساب مطلوب فقط لوحدة التحدث. عند إنشاء حساب، تتم معالجة معلومات مثل عنوان البريد الإلكتروني والبيانات اللازمة للمصادقة. وحدة الاستماع متاحة دون حساب."
                ],
                [
                    "2. جلسات التحدث والنتائج",
                    "لتطبيق الحد اليومي، تسجل الخدمة عدد جلسات التحدث المنجزة كل يوم بواسطة حسابك. تُعرض عليك نتيجة اختبار التحدث والتصحيحات والإجابات المقترحة في نهاية الجلسة، ولا يتم حفظ إجاباتك. أما نتيجة اختبار الاستماع فتُحتسب داخل متصفحك ولا يتم حفظها."
                ],
                [
                    "3. Firebase",
                    "تتم إدارة المصادقة وبعض بيانات الحساب باستخدام Firebase Authentication وFirestore وربطها بحساب Firebase الخاص بالمستخدم."
                ],
                [
                    "4. فيديوهات YouTube",
                    "يتم تشغيل الفيديوهات من YouTube. عند استخدام مشغل YouTube المدمج، قد يعالج YouTube بعض المعلومات وفقا لشروطه وسياساته الخاصة."
                ],
                [
                    "5. التعرف على الكلام والذكاء الاصطناعي",
                    "أثناء جلسة التحدث، يحوّل متصفحك صوتك إلى نص عبر خدمة التعرف على الكلام الخاصة به، وفق سياسة ناشر المتصفح. لا تستقبل الخدمة أي تسجيل صوتي: يُرسل نص إجاباتك فقط، ثم يُمرَّر إلى خدمة ذكاء اصطناعي لإعداد النتيجة والتصحيحات والنصائح."
                ],
                [
                    "6. الأغراض",
                    "تستخدم البيانات لتوفير تسجيل الدخول وتطبيق الحد اليومي لجلسات التحدث وتشغيل الخدمة وتحسين الخدمة والرد على طلبات الدعم."
                ],
                [
                    "7. مدة الاحتفاظ",
                    "يتم الاحتفاظ بالبيانات للمدة اللازمة لتشغيل الحساب وتحقيق الأغراض المذكورة، مع مراعاة المتطلبات القانونية المطبقة."
                ],
                [
                    "8. طلباتك",
                    "لطلب الوصول إلى البيانات أو تصحيحها أو حذفها، تواصل مع الناشر عبر العنوان الموجود في صفحة الاتصال."
                ],
                [
                    "9. الأمان",
                    "يتم استخدام إجراءات تقنية وتنظيمية لحماية البيانات، لكن لا يمكن ضمان أمان مطلق لأي نظام متصل بالإنترنت."
                ],
                [
                    "10. التحديثات",
                    "قد يتم تحديث هذه السياسة عند تغيير الخدمة. يجب إضافة تاريخ آخر تحديث عند نشر الصفحة."
                ]
            ]
        },
        "terms": {
            "kicker": "الشروط",
            "title": "شروط الاستخدام",
            "lead": "تنظم هذه الشروط استخدام حضّر لاختبار IELTS.",
            "blocks": [
                [
                    "1. استخدام الخدمة",
                    "يتيح حضّر لاختبار IELTS للمستخدمين التدرب على اختبار IELTS: اختبارات استماع مبنية على فيديوهات YouTube مع نتيجة، وجلسات تحدث مع ممتحن بالذكاء الاصطناعي مع نتيجة وتصحيحات وإجابات مقترحة."
                ],
                [
                    "2. الحساب",
                    "الحساب مطلوب لاستخدام وحدة التحدث، أما وحدة الاستماع فمتاحة دون حساب. المستخدم مسؤول عن صحة المعلومات التي يقدمها عند إنشاء الحساب وعن الحفاظ على سرية بيانات الدخول."
                ],
                [
                    "3. جلسات التحدث",
                    "عدد جلسات التحدث في اليوم لكل حساب محدود. يجوز للناشر تعديل هذا الحد أو تعليق الوحدة في أي وقت."
                ],
                [
                    "4. محتوى YouTube",
                    "يتم توفير الفيديوهات بواسطة YouTube. يجب على المستخدم احترام الشروط المطبقة على استخدام مشغل ومحتوى YouTube."
                ],
                [
                    "5. النتائج والمحتوى المولّد بالذكاء الاصطناعي",
                    "تُولَّد نتيجة وحدة التحدث وتصحيحاتها وإجاباتها المقترحة بالذكاء الاصطناعي، بينما تُحتسب نتيجة وحدة الاستماع تلقائيا انطلاقا من الإجابات المسجلة لكل اختبار. هذه النتائج مخصصة للتدريب والتعلم، وهي إرشادية ولا تشكل ضمانا للدقة ولا تضمن أي نتيجة في اختبار IELTS."
                ],
                [
                    "6. الاستخدامات الممنوعة",
                    "يمنع محاولة الوصول إلى حسابات الآخرين أو تجاوز إجراءات الأمان أو تعطيل الخدمة أو استخدام الموقع بما يخالف القوانين المطبقة."
                ],
                [
                    "7. توفر الخدمة",
                    "قد يتم تعديل خدمة حضّر لاختبار IELTS أو تعليقها أو إيقافها مؤقتا لأسباب تتعلق بالصيانة أو الأمان أو التطوير التقني."
                ],
                [
                    "8. الحساب والبيانات",
                    "يمكن للمستخدم طلب حذف الحساب والبيانات المرتبطة به باستخدام معلومات الاتصال المنشورة."
                ],
                [
                    "9. التعديلات",
                    "قد يتم تحديث هذه الشروط عند تغيير الخدمة، وتصبح النسخة المنشورة على الموقع سارية من تاريخ نفاذها."
                ]
            ]
        },
        "legal": {
            "kicker": "إشعار قانوني",
            "title": "الإشعارات القانونية",
            "lead": "يجب استكمال المعلومات التالية بالبيانات القانونية الحقيقية للناشر قبل إطلاق الموقع.",
            "blocks": [
                [
                    "ناشر الموقع",
                    "الاسم / الشركة: <bdi dir=\"ltr\">Mustapha RHALLAB</bdi><br>البريد الإلكتروني: <bdi dir=\"ltr\"><a href=\"mailto:myshopts@gmail.com\">myshopts@gmail.com</a></bdi><br><bdi dir=\"ltr\"><a href=\"mailto:musplay2023@gmail.com\">musplay2023@gmail.com</a></bdi>"
                ],
                [
                    "مسؤول النشر",
                    "الاسم: <bdi dir=\"ltr\">Mustapha RHALLAB</bdi>"
                ],
                [
                    "الاستضافة",
                    "واجهة الموقع: GitHub Pages.<br>واجهة API: Railway.<br>المصادقة وبيانات الحساب: Firebase / Google Cloud."
                ],
                [
                    "الفيديوهات",
                    "يتم عرض الفيديوهات عبر مشغل YouTube المدمج. لا يدعي حضّر لاختبار IELTS ملكية فيديوهات الجهات الأخرى."
                ]
            ]
        },
        "cookies": {
            "kicker": "ملفات الارتباط",
            "title": "ملفات الارتباط والتقنيات المشابهة",
            "lead": "قد يستخدم حضّر لاختبار IELTS ملفات الارتباط والتخزين المحلي للمتصفح وتقنيات الجلسات اللازمة لتشغيل الخدمة.",
            "blocks": [
                [
                    "التخزين المحلي",
                    "قد يستخدم الموقع التخزين المحلي للمتصفح لحفظ بعض تفضيلات الواجهة مثل اللغة المختارة."
                ],
                [
                    "المصادقة",
                    "قد تستخدم Firebase Authentication آليات ضرورية للحفاظ على جلسة تسجيل الدخول."
                ],
                [
                    "مشغل YouTube",
                    "قد يستخدم مشغل YouTube المدمج ملفات ارتباط أو تقنيات مشابهة حسب طريقة عمل YouTube وإعداداته."
                ],
                [
                    "إدارة التفضيلات",
                    "يمكن لإعدادات المتصفح أن تسمح بالحد من بعض ملفات الارتباط أو حذفها. وقد يؤثر تعطيل الآليات الضرورية على بعض وظائف الموقع."
                ],
                [
                    "التحديثات",
                    "يجب تحديث هذه الصفحة إذا تمت إضافة أدوات تحليل أو إعلانات أو تقنيات تتبع إضافية."
                ]
            ]
        },
        "contact": {
            "kicker": "اتصل بنا",
            "title": "تواصل معنا",
            "lead": "لطرح سؤال أو الإبلاغ عن مشكلة تقنية أو طلب يتعلق ببياناتك، استخدم معلومات الاتصال الرسمية للخدمة.",
            "blocks": [
                [
                    "الدعم",
                    "البريد الإلكتروني: <span class=\"legal-placeholder\">[يتم إضافة بريد الاتصال]</span>"
                ],
                [
                    "مشكلة تقنية",
                    "اذكر بريد حسابك والمشكلة التي واجهتها، ويمكنك إضافة لقطة شاشة إذا أمكن. لا ترسل كلمة المرور أبدا."
                ],
                [
                    "طلب متعلق بالبيانات",
                    "لطلب معلومات أو تصحيح أو حذف بيانات مرتبطة بحسابك، استخدم عنوان الاتصال الرسمي."
                ]
            ]
        }
    }
};

  var UI = {
    "fr": {
        "home": "← Accueil",
        "privacy": "Politique de confidentialité",
        "terms": "Conditions d'utilisation",
        "legal": "Mentions légales",
        "cookies": "Cookies",
        "contact": "Contact",
        "copyright": "© 2026 Préparez votre IELTS. Tous droits réservés.",
        "noscript": "Active JavaScript pour afficher cette page."
    },
    "en": {
        "home": "← Home",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use",
        "legal": "Legal Notice",
        "cookies": "Cookies",
        "contact": "Contact",
        "copyright": "© 2026 Prepare Your IELTS. All rights reserved.",
        "noscript": "Enable JavaScript to display this page."
    },
    "ar": {
        "home": "→ الرئيسية",
        "privacy": "سياسة الخصوصية",
        "terms": "شروط الاستخدام",
        "legal": "الإشعارات القانونية",
        "cookies": "ملفات الارتباط",
        "contact": "اتصل بنا",
        "copyright": "© 2026 حضّر لاختبار IELTS. جميع الحقوق محفوظة.",
        "noscript": "فعّل JavaScript لعرض هذه الصفحة."
    }
};

  var BRAND = {"fr": "Préparez votre IELTS", "en": "Prepare Your IELTS", "ar": "حضّر لاختبار IELTS"};

  var FILES = { privacy: 'privacy.html', terms: 'terms.html', legal: 'legal-notice.html', cookies: 'cookies.html', contact: 'contact.html' };
  var ORDER = ['privacy', 'terms', 'legal', 'cookies', 'contact'];

  var pageKey = document.body.getAttribute('data-page');
  var lang = 'fr';
  try { lang = localStorage.getItem('aivq_interface_language') || 'fr'; } catch (error) { /* stockage indisponible */ }
  if (!PAGES[lang]) lang = 'fr';

  function el(id) { return document.getElementById(id); }

  var SUPPORT_LABEL = { fr: 'Adresses e-mail :', en: 'Email addresses:', ar: 'عناوين البريد الإلكتروني:' };

  // Page Contact : les adresses viennent de contact.html (window.SUPPORT_EMAILS)
  function contactBlocks(blocks) {
    var emails = window.SUPPORT_EMAILS;
    if (pageKey !== 'contact' || !Array.isArray(emails) || !emails.length) return blocks;

    var links = emails.map(function (email) {
      return '<bdi dir="ltr"><a href="mailto:' + email + '">' + email + '</a></bdi>';
    }).join('<br>');

    var copy = blocks.slice();
    copy[0] = [copy[0][0], SUPPORT_LABEL[lang] + '<br>' + links];
    return copy;
  }

  function render() {
    var page = PAGES[lang][pageKey];
    var ui = UI[lang];
    if (!page) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = BRAND[lang] + ' - ' + page.title;
    var brandLink = document.querySelector('.brand');
    if (brandLink) brandLink.textContent = BRAND[lang];

    el('kicker').textContent = page.kicker;
    el('title').textContent = page.title;
    el('lead').textContent = page.lead;
    el('content').innerHTML = contactBlocks(page.blocks).map(function (block) {
      return '<article class="info-block"><h3>' + block[0] + '</h3><p>' + block[1] + '</p></article>';
    }).join('');

    el('homeLink').textContent = ui.home;
    el('copyright').textContent = ui.copyright;
    el('footerNav').innerHTML = ORDER.map(function (key) {
      return '<a href="' + FILES[key] + '"' + (key === pageKey ? ' aria-current="page"' : '') + '>' + ui[key] + '</a>';
    }).join('');

    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (button) {
      button.classList.toggle('active', button.getAttribute('data-lang') === lang);
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (button) {
    button.addEventListener('click', function () {
      lang = button.getAttribute('data-lang');
      try { localStorage.setItem('aivq_interface_language', lang); } catch (error) { /* ignoré */ }
      render();
    });
  });

  render();
})();
