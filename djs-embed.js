module.exports = {


	getSingleUrl( m ) {

		if ( m.attachments && m.attachments.size > 0 ) {
			return this.attachToUrl( m.attachments.first() );
		}
		if ( m.embeds && m.embeds.length > 0 ) return this.embedToUrl( m.embeds[0] );

	},

	getAllUrls() {

		let a = [];
		let url;

		if ( m.attachments ) {

			for( let v in m.attachments.values() ) {

				url = this.attachToUrl( v );
				if ( url ) a.push( url );
			}

		}

		if ( m.embeds ) {

			for( let v of m.embeds ) {
	
				url = this.embedToUrl( v );
				if ( url ) a.push( url );
			}
		}

		return a;

	},

	embedToUrl( embed ) {

		if ( embed.url) return embed.url;
		if ( embed.image ) return embed.image.url;

	},

	attachToUrl( attach ) {
		return attach.url;
	}

};