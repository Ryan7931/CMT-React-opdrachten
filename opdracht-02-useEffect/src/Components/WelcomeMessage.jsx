
import React, { useState, useEffect } from 'react';

function WelcomeMessage() {
	const [message, setMessage] = useState('Welkom bij de app!');
	const [fact, setFact] = useState('');

		const facts = [
			'De langste rivier ter wereld is de Nijl.',
			'Een groep flamingo’s heet een flamboyance.',
			'De Mount Everest groeit elk jaar een paar millimeter.',
			'Octopussen hebben drie harten.',
			'De grootste bloem ter wereld is de Rafflesia arnoldii.',
			'Bijen communiceren door te dansen.',
			'De Sahara woestijn is groter dan heel Europa.',
			'Een slak kan drie jaar slapen.',
			'De blauwe vinvis is het grootste dier dat ooit heeft geleefd.',
			'Er zijn meer sterren in het universum dan zandkorrels op aarde.',
			'De oudste boom ter wereld is meer dan 4800 jaar oud.',
			'De diepste plek in de oceaan is de Marianentrog.',
			'Een mens knippert gemiddeld 15.000 keer per dag met zijn ogen.',
			'De grootste woestijn is niet de Sahara, maar Antarctica.',
			'De snelste landdier is de cheeta.',
			'De kleinste vogel is de bijkolibrie.',
			'De maan beweegt elk jaar 3,8 cm verder van de aarde af.',
			'De langste insect is de wandelende tak.',
			'De grootste levende structuur is het Great Barrier Reef.',
			'Een giraffe heeft dezelfde aantal nekwervels als een mens.',
			'De oudste stad ter wereld is Jericho.',
			'De grootste vulkaan op aarde is Mauna Loa op Hawaï.',
			'De langste tunnel ter wereld is de Gotthard-basistunnel in Zwitserland.',
			'De grootste diamant ooit gevonden heet Cullinan.',
			'De kortste oorlog ooit duurde 38 minuten.',
			'De langste dag op Venus duurt langer dan een jaar op Venus.',
			'De grootste bibliotheek ter wereld is de Library of Congress.',
			'De langste brug ter wereld is de Danyang–Kunshan Grand Bridge.',
			'De grootste eiland is Groenland.',
			'De langste bergketen is de Andes.',
			'De grootste landzoogdier is de Afrikaanse olifant.',
			'De oudste geschreven taal is Sumerisch.',
			'De grootste stad qua oppervlakte is Hulunbuir in China.',
			'De langste rivier in Europa is de Wolga.',
			'De grootste vis is de walvishaai.',
			'De langste insectenleven is de koningin-termiet.',
			'De grootste vogel ooit was de olifantsvogel van Madagaskar.',
			'De langste menselijke nagel ooit was meer dan 8 meter.',
			'De grootste krab is de Japanse reuzenkrab.',
			'De langste tunnel onder water is de Channel Tunnel.',
			'De grootste landroofdier is de ijsbeer.',
			'De langste menselijke haar ooit was meer dan 5 meter.',
			'De grootste amfibie is de Chinese reuzensalamander.',
			'De langste regenboog duurde 9 uur.',
			'De grootste spin is de Goliath vogelspin.',
			'De langste slang is de netpython.',
			'De grootste orchidee is de tijgerorchidee.',
			'De langste insectenvleugel is van de Atlasvlinder.',
			'De grootste koraal is de hersenkoraal.',
			'De langste walvis is de blauwe vinvis.',
			'De grootste schildpad is de lederschildpad.'
		];

	useEffect(() => {
		function updateMessageAndFact() {
			const currentTime = new Date();
			const hours = currentTime.getHours();
			let newMessage = '';
			if (hours < 12) {
				newMessage = 'Goedemorgen!';
			} else if (hours < 18) {
				newMessage = 'Goedemiddag!';
			} else {
				newMessage = 'Goedenavond!';
			}
			setMessage(newMessage);
			// Kies een random feitje
			const randomIndex = Math.floor(Math.random() * facts.length);
			setFact(facts[randomIndex]);
		}

		updateMessageAndFact(); // Initieel bij laden

		// Update elk uur
		const interval = setInterval(() => {
			updateMessageAndFact();
		}, 60 * 60 * 1000); // 1 uur in ms

		return () => clearInterval(interval);
	}, []);

				return (
					<div style={{
						background: 'linear-gradient(120deg, #f8f6f0 0%, #ffe5ec 40%, #ffb86c 70%, #ff61a6 100%)',
						backgroundSize: '200% 200%',
						animation: 'gradientMove 8s ease-in-out infinite',
						borderRadius: '24px',
						boxShadow: '0 8px 32px rgba(60,40,20,0.15)',
						padding: '2rem',
						margin: '2rem auto',
						maxWidth: '600px',
						textAlign: 'center',
					}}>
						<h2>{message}</h2>
						<p style={{marginTop: '1rem', fontStyle: 'italic', color: '#7c5e3c'}}>{fact}</p>
						<style>{`
							@keyframes gradientMove {
								0% {background-position: 0% 50%;}
								50% {background-position: 100% 50%;}
								100% {background-position: 0% 50%;}
							}
						`}</style>
					</div>
				);
}

export default WelcomeMessage;
