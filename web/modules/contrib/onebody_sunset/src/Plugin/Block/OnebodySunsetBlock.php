<?php 
namespace Drupal\onebody_sunset\Plugin\Block;
use Drupal\Core\Block\BlockBase;


/**
 * Provides a 'Sunset Calculator' block.
 *
 * @Block(
 *  id = "onebody_sunset_block",
 *  label = "Showing Sunset information for your current location",
 *  admin_label = @Translation("Sunset Calculator"),
 * )
 */
class OnebodySunsetBlock extends BlockBase  {
    function build(){

        return [
            '#markup' => '<div class="map"></div>
                    <strong>Lat</strong><br />
                    <span class="form-control" id="startLat"></span>
                    <br />
                    <strong>Long</strong><br />
                    <span class="form-control" id="startLon"></span>',
            '#attached' => [
                'library' => [
                  'onebody_sunset/calculator',
                ]
            ],
        ];
    }
}