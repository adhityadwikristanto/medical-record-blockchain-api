const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
        this.search_chain = [];
    }

    resetBlock() {
        this.chain.splice(1, this.chain.length-1);
    }

    addBlock(data) {
        const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
        this.chain.push(block);
        return block;
    }

    isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const lastBlock = chain[i - 1];
            if
            (
            block.lastHash !== lastBlock.hash ||
            block.hash !== Block.blockHash(block)
            ) {
            return false;
            }
        }
        return true;
    }

    searchChain(id) {
        console.log(id)
        this.search_chain = [];
        for (let block_index = 1; block_index < this.chain.length; block_index++) {
            if (this.chain[block_index]['data']['id_medrec'] == id) {
                console.log(this.chain[block_index]['data']['id_medrec']);
                const found_block = this.chain[block_index];
                this.search_chain.push(found_block);
            }
        }
    }
}
module.exports = Blockchain;