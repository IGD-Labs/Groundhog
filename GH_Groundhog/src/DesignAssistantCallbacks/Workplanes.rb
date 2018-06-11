module GH
    module Groundhog
        module DesignAssistant

            def self.remove_workplane(wd)
                wd.add_action_callback("remove_workplane"){ |action_context,wp_name|
                    # Remove from the model                    
                    entities = Sketchup.active_model.entities                    
                    faces = Labeler.get_workplane_by_name(wp_name)
                    
                    # This calls the observer, thus unregisters if necessary
                    entities.erase_entities(faces)
                }
            end # End of remove_workplane

            def self.edit_workplane(wd)
                wd.add_action_callback("edit_workplane"){|action_context,msg|
                    
                    # Parse the data
                    new_workplane = JSON.parse(msg)
                    old_name = new_workplane['oldName']
                    new_name = new_workplane['name']
                    new_workplane.delete('oldName')
                    
                    # Edit surfaces in the model
                    if old_name != new_name then
                        Sketchup.active_model.start_operation('rename workplane surfaces')                        
                        faces = Utilities.get_workplane_by_name(old_name)
                        faces.each{|f|
                            f.set_attribute(GROUNDHOG_DICTIONARY,NAME_KEY,new_name)
                        }
                        Sketchup.active_model.commit_operation
                    end

                    # Change registry in dictionary                    
                    value = Utilities.get_workplanes_registry
                    value.each_with_index{|wp,i|                        
                        if wp['name'] == old_name then
                            value[i] = new_workplane
                            break
                        end
                    }
                    Utilities.set_workplanes_registry(value)
                }
            end # End of edit_workplane

        end # End of DesignAssistant module
    end # End of Groundhog module
end # End of GH module