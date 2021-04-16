---
id: damage-triggers
title: Damage Triggers
sidebar_label: Damage Triggers
---

### Parameters
Damage triggers have the following parameters:
- **affected entities**: The entity types that can trigger an effect when damaged. The full list for the latest version of spigot can be found here:
https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html

- **damage required**: The minimum damage to the entity (in half hearts) that can trigger an effect

- **damage causes**: The type of damages that can trigger the effect. The full list for the latest version of spigot can be found here:
  #https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html

- **attacker entities**: The type of entity that needs to have dealt the damage in order to trigger an effect.
    In most cases it is an invalid setting, but it is valid for:
    - "Entity_attack", where damage cause is the mob who attacked, ie: zombie
    - "Projectile" where damage cause, is the projectile type, ie: arrow

### Example    
*This is an example of how it would look like:*
```yaml
  Mild Fall:
    damage required: 0
    affected entities: Player
    damage causes: Fall
```