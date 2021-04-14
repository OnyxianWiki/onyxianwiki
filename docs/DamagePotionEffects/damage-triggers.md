---
id: damage-triggers
title: Damage Triggers
sidebar_label: Damage Triggers
---

### Parameters
Damage triggers have the following parameters:
- **affected entities**: The entity types that when damaged can trigger an effect. The full list for the latest version of spigot can be found here:
https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html
- **damage required**: The minimun damage to the entity (in half hearts) that can trigger an effect
- **damage causes**: The type of damages that can trigger the effect. The full list for the latest version of spigot can be found here:
  #https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html
- **attacker entities**: The type of entity that needs to have dealt the damage in order to trigger an effect (ONLY aplicable to Entity_attack)
    In most cases, its an invalid setting.
    On "Entity_attack" damage cause (AKA direct attacks, such as punchs), it means the mob who attacked, ie: zombie
    On "Projectile" damage cause, it means the projectile type, ie: arrow

### Example    
*This is an example of how it would look like:*
```yaml
  Mild Fall:
    damage required: 0
    affected entities: Player
    damage causes: Fall
```