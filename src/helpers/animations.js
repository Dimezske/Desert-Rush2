export default function makeAnimations(scene) {
    // TONS of animations. Everything animation-related is ugly and stupid below.
    // TODO:  maybe use JSON to load animations
    
    let config = {
        key: 'platform',
        frames: scene.anims.generateFrameNumbers('platforms', {
            start: 14,
            end: 14,
            first: 14
        })
    };

    scene.anims.create(config);
}