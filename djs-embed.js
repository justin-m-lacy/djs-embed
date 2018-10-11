module.exports = {


	getSingle( m ) {

		if ( m.attachments && m.attachments.size > 0 ) {
			return this.attachUrl( m.attachments.first() );
		}
		if ( m.embeds && m.embeds.length > 0 ) return this.embedUrl( m.embeds[0] );

	},

	getAllUrls( m ) {

		let a = [];
		let url;

		if ( m.attachments ) {

			for( let v in m.attachments.values() ) {

				url = this.attachUrl( v );
				if ( url ) a.push( url );
			}

		}

		if ( m.embeds ) {

			for( let v of m.embeds ) {
	
				url = this.embedUrl( v );
				if ( url ) a.push( url );
			}
		}

		return a;

	},

	async replyEmbed( m, text, embedUrl ) {

		return m.reply( text, { embed:{ image:{ url:embedUrl } } } );

	},

	embedUrl( embed ) {

		if ( embed.url) return embed.url;
		if ( embed.image ) return embed.image.url;

	},

	attachUrl( attach ) {
		return attach.url;
	}

};